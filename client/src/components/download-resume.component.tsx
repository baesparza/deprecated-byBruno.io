import { useState } from 'react';
import { FiCircle, FiDownload } from 'react-icons/fi';


export const DownloadResumeComponent: React.FC = () => {
    const [downloading, setDownloading] = useState<boolean>(false)
    console.log({ downloading })
    return (
        <a
            href='http://bybruno.io/functions/download-resume'
            download
            onClick={() => setDownloading(true)}
            className=" flex gap-2 items-center text-sm font-medium bg-primary text-white rounded px-4 py-2 transform hover:-translate-y-1 transition-transform">
            {
                downloading
                    ? <>
                        <span>Downloading</span>
                        <FiCircle ></FiCircle>
                    </>
                    : <>
                        <span>Download</span>
                        <FiDownload ></FiDownload>
                    </>
            }
        </a>
    );
}