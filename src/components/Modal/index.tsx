import React, { useState, useCallback, forwardRef, useImperativeHandle } from 'react';

export interface ModalHandles {
  OpenModal:() => void;
}

const Modal: React.RefForwardingComponent<ModalHandles> = (props, ref) => {
  const [visible, setVisible] = useState<boolean>(false);

  useImperativeHandle(ref, () => {
    return {
      OpenModal
    };
  });

  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  const OpenModal = useCallback(() => {
    setVisible(true);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div>
      Modal Aberto
      <button onClick={handleCloseModal}>Fechar modal</button>
    </div>
  );
};

export default forwardRef(Modal);
