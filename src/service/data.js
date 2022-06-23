import axios from "axios";
const ip = "http://13.229.213.34";
export async function getDataByPathTest(path, accessToken, data) {
  try {
    let endpoint = "";
    let option = {};
    if (accessToken && accessToken !== "") option = getOptions(accessToken);
    if (path !== "") {
      endpoint = `${ip}/${path}`;
    }
    if (data !== "") {
      endpoint = `${ip}/${path}?${data}`;
    }
    const res = await axios.get(endpoint, option);
    console.log("endpoint: ", endpoint);
    console.log("Response getData: ", res);
    return res;
  } catch (error) {
    return error.response;
  }
}

export async function searchDataByPath(path, accessToken, data) {
  try {
    let endpoint = "";
    let body = {};
    let option = {};
    if (accessToken && accessToken !== "") option = getOptions(accessToken);
    if (path !== "") {
      endpoint = `${ip}/${path}/${data}`;
    }
    if (data !== "") {
      body = data;
    }
    const res = await axios.get(endpoint, body, option);
    return res;
  } catch (error) {
    return error.response;
  }
}
export async function createDataByPath(path, accessToken, data) {
  try {
    let endpoint = "";
    let body = {};
    let option = {};
    if (accessToken && accessToken !== "") option = getOptions(accessToken);
    if (path !== "") {
      endpoint = `${ip}/${path}/${data}`;
    }
    if (data !== "") {
      body = data;
    }
    const res = await axios.post(endpoint, body, option);
    return res;
  } catch (error) {
    return error.response;
  }
}

export async function deleteDataByPath(path, accessToken, id) {
  try {
    let endpoint = "";
    let option = {};
    if (accessToken && accessToken !== "") option = getOptions(accessToken);
    if (path !== "") {
      endpoint = `${ip}/${path}/${id}`;
    }
    const res = await axios.delete(endpoint, option);
    return res;
  } catch (error) {
    return error.response;
  }
}
function getOptions(accessToken) {
  let headers = {};

  if (accessToken && accessToken !== "") {
    headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  }
  const options = { headers };
  return options;
}
