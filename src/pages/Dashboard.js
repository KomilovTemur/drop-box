import React from "react";
import StorageNavBar from "../components/storage/StorageNavBar";
import { useFolder } from "./../components/hooks/useFolder";
import Folder from "./../components/storage/Folder";
import File from "./../components/storage/File";
import { useParams } from "react-router-dom";
import FolderBreadcumps from "./../components/storage/FolderBreadcumps";

const Dashboard = () => {
  const { id } = useParams();
  const { folder, childFolders, childFiles } = useFolder(id);

  return (
    <div className="container bg-slate-300 my-2 rounded p-2 shadow-lg shadow-slate-500 mx-auto">
      <div className="flex justify-between items-center">
        <div className="">
          <FolderBreadcumps currentFolder={folder} />
        </div>
        <div className="">
          <StorageNavBar currentFolder={folder} />
        </div>
      </div>
      <div
        className="mt-6 border p-2"
        style={{
          maxHeight: window.innerHeight - 300,
          height: window.innerHeight - 300,
        }}
      >
        {childFolders.length > 0 && (
          <div className="b">
            {childFolders.map((childFolder) => (
              <div
                className="border-b p-1 hover:bg-slate-100 flex justify-between"
                key={childFolder.id}
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}

        {childFiles.length > 0 && (
          <div>
            {childFiles.map((file) => (
              <div
                className="border-b p-1 hover:bg-slate-100 flex justify-between"
                key={file.id}
              >
                <File file={file} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
