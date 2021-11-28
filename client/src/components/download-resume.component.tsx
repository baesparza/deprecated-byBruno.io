import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';


export const DownloadResumeComponent: React.FC = () => {
    return (
        <a
            href='http://bybruno.io/functions/download-resume'
            download
            className=" flex gap-2 items-center text-sm font-medium bg-primary text-white rounded px-4 py-2 transform hover:-translate-y-1 transition-transform">
            <span>Download</span>
            <FiDownload ></FiDownload>
        </a>
    );
}