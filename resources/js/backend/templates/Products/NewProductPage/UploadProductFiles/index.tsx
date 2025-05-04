import Card from '@/backend/components/Card';
import FieldFiles from '@/backend/components/FieldFiles';
import React, { useCallback, useState } from 'react';


interface UploadedFile {
    file: File;
    preview?: string;
}

const UploadProductFiles: React.FC = () => {

    const [files, setFiles] = useState<UploadedFile[]>([]);


    const handleFileChange = useCallback(
        (file: File | null) => {
            if (file) {
                
                if (files.length >= 5) {
                    alert('Chỉ được upload tối đa 5 file');
                    return;
                }

               
                const maxSize = 5 * 1024 * 1024; // 5MB
                if (file.size > maxSize) {
                    alert('File không được vượt quá 5MB');
                    return;
                }

                const newFile: UploadedFile = {
                    file,
                    preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
                };

                setFiles((prevFiles) => [...prevFiles, newFile]);
            }
        },
        [files],
    );


    const handleRemoveFile = useCallback((fileToRemove: UploadedFile) => {
        setFiles((prevFiles) => prevFiles.filter((f) => f.file !== fileToRemove.file));
    }, []);

    return (
        <Card classHead="!pl-3" title="Upload product files">
            <div className="p-3 pt-0">
                <FieldFiles onChange={handleFileChange} />

      
                {files.length > 0 && (
                    <div className="mt-4">
                        <h4 className="mb-2 text-sm font-semibold">Files Uploaded: {files.length}</h4>
                        <div className="grid grid-cols-3 gap-4">
                            {files.map((uploadedFile, index) => (
                                <div key={index} className="relative">
                                    {uploadedFile.preview && (
                                        <img src={uploadedFile.preview} alt={`Preview ${index}`} className="h-32 w-full rounded object-cover" />
                                    )}
                                    <div className="mt-2 truncate text-sm">{uploadedFile.file.name}</div>
                                    <button
                                        onClick={() => handleRemoveFile(uploadedFile)}
                                        className="absolute top-1 right-1 rounded-full bg-red-500 p-1 text-xs text-white"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Card>
    );
};

export default UploadProductFiles;
