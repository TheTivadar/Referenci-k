export const fetchItems = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTAwMDAxOSIsInVuaXF1ZSI6IiQyYiIsImV4cCI6MTcyNTk4NzA3NX0.BX4FLA4X2p6lzbt0NwsImG3qQufsz9c3tiiYcBIRNxI");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    try {
      const response = await fetch("https://test.gatium.hu/api/items", requestOptions);
      const result = await response.json();
      return result; // visszaadjuk az adatokat
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // ha hiba történik, újra feldobjuk, hogy a hívó fél kezelhesse
    }
  };

  export const fetchOrders = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTAwMDAxOSIsInVuaXF1ZSI6IiQyYiIsImV4cCI6MTcyNTk4NzA3NX0.BX4FLA4X2p6lzbt0NwsImG3qQufsz9c3tiiYcBIRNxI");
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    try {
      const response = await fetch("https://test.gatium.hu/api/orders", requestOptions);
      const result = await response.json();
      return result; 
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  };

  export const fetchCollections = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTAwMDAxOSIsInVuaXF1ZSI6IiQyYiIsImV4cCI6MTcyNTk4NzA3NX0.BX4FLA4X2p6lzbt0NwsImG3qQufsz9c3tiiYcBIRNxI");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    try {
      const response = await fetch("https://test.gatium.hu/api/categories", requestOptions);
      const result = await response.json();
      return result; 
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  };

  export const fetchUsers = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTAwMDAxOSIsInVuaXF1ZSI6IiQyYiIsImV4cCI6MTcyNTk4NzA3NX0.BX4FLA4X2p6lzbt0NwsImG3qQufsz9c3tiiYcBIRNxI");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    try {
      const response = await fetch("https://test.gatium.hu/api/users", requestOptions);
      const result = await response.json();
      return result; 
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; 
    }
  };