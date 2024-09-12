const url = "http://localhost:3000";

export const getTabData = async () => {
  try {
    const res = await fetch(`${url}/hosts_links`);
    const data = await res.json();

    return data;
  } catch (error) {
    return error.message;
  }
};

export const getTabContent = async (path) => {
  try {
    const res = await fetch(`${url}${path}`);
    const data = await res.json();

    return data;
  } catch (error) {
    return error.message;
  }
};
