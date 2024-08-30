import Image from "next/image";
import React from "react";

export const useAddToCartModal = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  React.useEffect(() => {
    if (openModal) {
      setTimeout(() => {
        setOpenModal(false);
      }, 2000);
    }
  }, [openModal]);

  const ModalDialogConfirm = () => {
    return (
      openModal && (
        <div className="fixed z-30 px-6 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg space-y-2 text-center items-center">
            <img
              src="/images/success.png"
              alt="qr"
              className="w-32 h-32 mx-auto"
            />
            <p className="font-medium text-lg">Berhasil Menambahkan</p>
            <p className="text-lg font-light">
              Barang Anda telah ditambahkan ke keranjang
            </p>
          </div>
        </div>
      )
    );
  };

  return {
    openModal,
    handleOpenModal,
    ModalDialogConfirm,
  };
};
