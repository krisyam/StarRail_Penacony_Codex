import AsyncStorage from "@react-native-async-storage/async-storage";
import RNFetchBlob from "rn-fetch-blob";

const fs = RNFetchBlob.fs;
const dirs = RNFetchBlob.fs.dirs;

/**
 * Stores data in AsyncStorage.
 * @param {string} name - The name of the data to be stored.
 * @param {string} value - The value of the data to be stored.
 */
export const storeData = async (name, value) => {
    try {
        await AsyncStorage.setItem(name, value);
        console.log("Added " + value + " to " + name);
        return true
    } catch (err) {
        console.log(err);
    }
    return false
};

/**
 * Removes data from AsyncStorage.
 * @param {string} name - The name of the data to be removed.
 */
export const removeData = async (name) => {
    await AsyncStorage.removeItem(name);
    console.log("Removed " + name);
};

/**
 * Fetches data from AsyncStorage.
 * @param {string} name - The name of the data to be fetched.
 * @returns {string|null} The fetched data, or null if it doesn't exist.
 */
export const fetchData = async (name) => {
    const data = await AsyncStorage.getItem(name);
    if (data !== null) {
        return data;
    }
    return null;
};

/**
 * Clears all data from AsyncStorage. (Please delete before Production build)
 */
export const nukeAsyncStorage = async () => {
    try {
        await AsyncStorage.clear();
        console.log("AsyncStorage cleared successfully");
    } catch (error) {
        console.warn("Error clearing AsyncStorage:", error);
    }
};

/**
 * Creates a file.
 * @param {string} dir - The directory where the file will be created.
 * @param {string} fileName - The name of the file to be created.
 * @param {string|object|null} data - The data to be written to the file. If it's a string, it will be written as is. If it's an object, it will be stringified before writing. If it's null, an empty file will be created.
 * @returns {boolean} True if the file is created, false if it already exists.
 */
export const createFile = async (dir, fileName, data) => {
    try {
        if (await fs.exists(dir + fileName)) {
            console.log("File already exists");
            return false; // file already exists
        }
        if (data && typeof data === "string") {
            await fs.writeFile(dir + fileName, data, "utf8");
            console.log(
                "File created with stringified data, fileName: " + fileName,
            );
        } else if (data) {
            const dataString = JSON.stringify(data);
            await fs.writeFile(dir + fileName, dataString, "utf8");
            console.log("File created with data, fileName: " + fileName);
        } else {
            await fs.createFile(dir + fileName, "utf8");
            console.log("File created");
        }
        return true; // file created
    } catch (error) {
        console.warn("Error creating file:", error);
    }
    return false;
};

/**
 * Reads a file.
 * @param {string} dir - The directory where the file is located.
 * @param {string} fileName - The name of the file to be read.
 * @returns {object[]} The parsed data from the file, or an empty array if the file doesn't exist.
 */
export const readFile = async (dir, fileName) => {
    if (await fs.exists(dir)) {
        response = await RNFetchBlob.fs.readFile(dir + fileName, "utf8");
        response = await JSON.parse(response);
        return response;
    }
    console.log("File does not exist");
    return [];
};

/**
 * Writes data to a file.
 * @param {string} dir - The directory where the file is located.
 * @param {string} fileName - The name of the file to be written.
 * @param {string|object|null} data - The data to be written to the file. If it's a string, it will be written as is. If it's an object, it will be stringified before writing.
 */
export const writeFile = async (dir, fileName, data) => {
    if (await fs.exists(dir)) {
        if (data && typeof data === "string") {
            fs.writeFile(dir + fileName, data, "utf8")
                .then(() => {
                    console.log(
                        "Data written to file successfully with stringified data: ",
                        fileName,
                    );
                    return true;
                })
                .catch((error) => {
                    console.warn("Error writing data to file: ", error);
                });
        } else if (data) {
            const dataString = await JSON.stringify(data);
            fs.writeFile(dir + fileName, dataString, "utf8")
                .then(() => {
                    console.log(
                        "Data written to file successfully: ",
                        fileName,
                    );
                    return true;
                })
                .catch((error) => {
                    console.warn("Error writing data to file: ", error);
                });
        }
    }
    return false;
};

/**
 * Deletes a file or folder.
 * @param {string} dir - The directory where the file or folder is located.
 * @param {string} fileName - The name of the file or folder to be deleted. If null, the entire folder will be deleted.
 * @returns {boolean} True if the file or folder is deleted, false if it doesn't exist.
 */
export const deleteFile = async (dir, fileName) => {
    if (await fs.exists(dir)) {
        if (fileName) {
            await fs.unlink(dir + fileName);
            console.log("File deleted", fileName);
        } else {
            await fs.unlink(dir);
            console.log("Folder deleted", fileName);
        }
        return true;
    }
    return false;
};

export const deleteMainBundleDirFiles = async () => {
    try {
        const folder = `${dirs.MainBundleDir}/`;
        deleteFile(folder, "pfp.png");
        deleteFile(folder, "emails.txt");
        deleteFile(folder, "messageIds.txt");
    } catch (error) {
        console.warn(
            "Error occurred during deletion of main bundle directory files:",
            error,
        );
    }
};

/**
 * Generates a random ID with the specified length.
 * @param {number} length - The length of the ID.
 * @returns {number} The generated ID.
 */
export async function generateId (length) {
    if(length > 8){
        const gen = Math.floor(Math.random() * 10000000)
        console.log('gen', gen)
        return gen 
    }
    const gen = Math.floor(Math.random() * Math.pow(10, length))
    console.log('gen', gen)
    return gen 
}