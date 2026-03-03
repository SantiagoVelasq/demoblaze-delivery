import { AfterStep, After } from '@cucumber/cucumber';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Toma una captura de pantalla y la adjunta al reporte de Allure
 * @param screenshotName Nombre descriptivo de la captura
 * @param stepName Nombre del paso que falló
 */
const takeScreenshot = async (screenshotName: string, stepName: string) => {
  try {
    const screenshot = await browser.takeScreenshot();
    const timestamp = new Date().getTime();
    const fileName = `${screenshotName}-${timestamp}.png`;
    
    // Guardar en carpeta de screenshots
    const screenshotPath = path.join(process.cwd(), 'screenshots', fileName);
    
    // Crear el directorio si no existe
    const dir = path.dirname(screenshotPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Escribir el archivo
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    
    // Adjuntar a Allure report
    await browser.call(async () => {
      const allure = (global as any).allure;
      if (allure) {
        allure.addAttachment(
          `${screenshotName} - ${stepName}`,
          Buffer.from(screenshot, 'base64'),
          'image/png'
        );
      }
    });
    
    console.log(`✓ Captura guardada: ${fileName}`);
  } catch (error) {
    console.error(`✗ Error al tomar captura: ${error}`);
  }
};

/**
 * Captura los logs del navegador y los adjunta al reporte
 */
const attachBrowserLogs = async () => {
  try {
    const logs = await browser.getLogs('browser');
    
    if (logs && logs.length > 0) {
      const logsText = logs
        .map(log => `[${log.level.toUpperCase()}] ${log.message}`)
        .join('\n');
      
      // Adjuntar a Allure report
      await browser.call(async () => {
        const allure = (global as any).allure;
        if (allure) {
          allure.addAttachment(
            'Browser Logs',
            logsText,
            'text/plain'
          );
        }
      });
      
      console.log(`✓ Browser logs capturados: ${logs.length} registros`);
    }
  } catch (error) {
    console.error(`✗ Error al capturar logs: ${error}`);
  }
};

/**
 * Hook que se ejecuta después de cada paso
 * Captura screenshot cuando un paso falla
 */
AfterStep(async function (step: any) {
  if (step.result.status === 'FAILED') {
    console.log(`\n📸 Capturando evidencia de paso fallido: ${step.pickleStep?.text}`);
    await takeScreenshot('failed-step', step.pickleStep?.text || 'unknown-step');
  }
});

/**
 * Hook que se ejecuta después de cada escenario
 * Captura screenshot y logs cuando un escenario falla
 */
After(async function (scenario: any) {
  if (scenario.result?.status === 'FAILED') {
    const scenarioName = scenario.pickle?.name || 'unknown-scenario';
    console.log(`\n📸 Capturando evidencia de escenario fallido: ${scenarioName}`);
    
    // Captura de pantalla del escenario fallido
    await takeScreenshot('failed-scenario', scenarioName);
    
    // Captura de logs del navegador
    await attachBrowserLogs();
  }
});

export { takeScreenshot, attachBrowserLogs };
