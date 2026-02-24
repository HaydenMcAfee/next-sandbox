'use client'

import FileInfo from '@/app/models/fileInfo';
import React from 'react';
import './FileExplorer.css';


type FileExplorerProps = {
    fileInfoList: FileInfo[];
};

const FileExplorer: React.FC<FileExplorerProps> = ({
    fileInfoList, // This should be passed as a prop or fetched from an API
}) => {
    return (
        <div className="file-explorer">
            <table className="file-explorer-table">
                <thead>
                    <tr className="file-explorer-header">
                        <th className="file-explorer-header-cell">Name</th>
                        <th className="file-explorer-header-cell">Modified</th>
                    </tr>
                </thead>
                <tbody>
                    {fileInfoList.map((fileInfo: FileInfo) => (
                        <tr key={fileInfo.id} className="file-explorer-row">
                            <td className="file-explorer-cell">{fileInfo.fileName}</td>
                            <td className="file-explorer-cell">{fileInfo.uploaded_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FileExplorer;