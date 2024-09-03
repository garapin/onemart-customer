import moment from "moment";

const ApiService = {
  formatDate: (date: string) => {
    return moment(date).format("DD MMMM YYYY HH:mm");
  },
  fetchDetailProduct: async (
    stockid: string,
    target_database: string,
    callback: (data: any, error?: any) => void
  ) => {
    const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;
    const url = `${baseApiUrl}store/productbystockcard/${stockid}`;

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

      callback(result.data.singleProduct);

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

  validateEmail: (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  checkOutPayment: async (
    invoice: string,
    target_database: string,
    reducestock: boolean,
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
        body: JSON.stringify({
          invoice: invoice + "&" + target_database,
          reducestock,
        }),
      });
      // console.log(res.headers);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await res.json();
      // console.log(result);

      callback(result.data.invoice);

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

  checkToken() {
    const token = localStorage.getItem("token");

    if (token === null) {
      return false;
    } else {
      return true;
    }
  },
};

export default ApiService;
