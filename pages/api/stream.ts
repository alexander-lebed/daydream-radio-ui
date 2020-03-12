import fs from 'fs';
import {RadioMode} from '../../types';

export default async (req, res) => {
    const mode: RadioMode = req.query.mode;
    const stream = fs.createReadStream(`./music/${mode}/premiere.mp3`);
    stream.pipe(res);
}

// const stream = fs.createReadStream(`./music/${'now'}/premiere.mp3`);
// const clients: Array<NodeJS.WritableStream> = [];

// stream.on('data', (chunk) => {
//     console.log('--- stream data. clients.length: ' + clients.length)
//         if (clients.length > 0) {
//             clients.forEach(client => {
//                 client.write(chunk); // it loads stream chunks too fast!
//             })
//         }
// });

// stream.on('metadata', (title) => {
//     console.log(`--- metadata: ${title}`);
// })

// stream.on('close', () => {
//     console.log(`--- stream closed`);
// })

// export default async (req, res) => {
//     res.writeHead(200,{
//         "Content-Type": "audio/mpeg",
//         'Transfer-Encoding': 'chunked'
//     });
//     clients.push(res);
// }