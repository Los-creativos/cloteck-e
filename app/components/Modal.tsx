import React from "react";

const Modal = ({ isVisible, onClose}: { isVisible: boolean, onClose: () => void}) => {    
    if (!isVisible ) return null;

    const handleClose = () => {
        onClose();
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={onClose}>
             <div className="w-[600px]">
                <div className="bg-black p-2 rounded">
                En este momento, no contamos con información disponible. Agradecemos profundamente tu elección de Cloteck, tu empresa boliviana de ropa a la moda. Valoramos tu interés y te invitamos a revisar nuestras últimas novedades pronto. ¡Gracias por tu comprensión y apoyo!
                </div>
             </div>
             </div>
    )
}

export default Modal