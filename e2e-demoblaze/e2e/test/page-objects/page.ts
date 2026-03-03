import { browser } from '@wdio/globals';

class Page {
    
    public async open(path: string = ''): Promise<void> {
        await browser.url(path);
        await browser.maximizeWindow();
    }
}

export default new Page();
