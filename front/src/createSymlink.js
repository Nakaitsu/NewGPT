import fs from 'fs';

const modulePath = '../../../../server/database/models/UserAuthToken';
const symlinkPath = './node_modules/UserAuthToken';

fs.symlinkSync(modulePath, symlinkPath, 'dir');
