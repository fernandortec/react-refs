import React, { useRef, useCallback, FormEvent } from 'react';
import Input from './components/Input';
import Modal, { ModalHandles } from './components/Modal';

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef({ value: false });
  const modalRef = useRef<ModalHandles>(null);

  const handleFocus = useCallback(() => {
    nameInputRef.current?.focus();
  }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    emailInputRef.current?.focus();
    console.log(
      emailInputRef.current?.value,
      nameInputRef.current?.value,
      acceptTermsRef.current.value
    );
  }, []);

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value;
  }, []);

  const handleOpenModal = useCallback(() => {
    modalRef.current?.OpenModal()
  },[])

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          label="Nome completo"
          placeholder="Digite seu nome"
          ref={nameInputRef}
        />

        <br />
        <br />

        <Input
          name="email"
          label="Endereço de email"
          placeholder="Digite seu email"
          ref={emailInputRef}
        />

        <br />
        <br />

        <span onClick={handleFocus}>Foco nome</span>

        <br />
        <br />

        <button type="button">Foco email</button>

        <button type="button" onClick={handleAcceptTerms}>
          Aceitar termos
        </button>

        <br />
        <br />

        <button type="submit">Enviar</button>
      </form>

      <br />
      <br />

      <button onClick={handleOpenModal}>Abrir modal</button>

      <Modal ref={modalRef} />
    </div>
  );
}

export default App;
