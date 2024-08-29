const ApiService = {
  fetchDetailProduct: async (
    productid: string,
    target_database: string,
    callback: (data: any, error?: any) => void
  ) => {
    const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;
    const url = `${baseApiUrl}raku/supplier/product/${productid}`;

    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "target-database": target_database,
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      // console.log(res.headers);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await res.json();

      callback(result.data);

      // setProduct(result.data);
    } catch (err: any) {
    } finally {
    }
  },

  createInvoices: async (
    body: any,
    target_database: string,
    callback: (data: any, error?: any) => void
  ) => {
    const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;
    const url = `${baseApiUrl}/store/transcation/create-invoice-one-mart-customer`;
    console.log(body);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type
          "target-database": target_database,
          Authorization: `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(body), // Convert the body object to a JSON string
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await res.json();
      // console.log(result.data);

      callback(result.data);

      // console.log(result.data);
    } catch (err: any) {
    } finally {
    }
  },

  checkOutPayment: async (
    invoicelable: string,
    target_database: string,
    callback: (data: any, error?: any) => void
  ) => {
    const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;
    const url = `${baseApiUrl}raku/guest/checkpayment/`;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "target-database": target_database,
          Authorization: `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ invoicelable }),
      });
      // console.log(res.headers);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await res.json();

      callback(result.data);

      // setProduct(result.data);
    } catch (err: any) {
    } finally {
    }
  },

  authGuest: async (callback: (data: any, error?: any) => void) => {
    const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;
    const url = `${baseApiUrl}auth/guest/`;

    try {
      const res = await fetch(url, {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await res.json();
      callback(result.data);

      return result.data;
    } catch (err: any) {}
  },
};

export default ApiService;
