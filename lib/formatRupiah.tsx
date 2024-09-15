/**
 * Formats an integer as Rupiah currency.
 *
 * @param {number} amount - The amount to be formatted.
 * @returns {string} The formatted currency string.
 */
function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default formatRupiah;
