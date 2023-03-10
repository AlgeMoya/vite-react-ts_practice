import React from "react";
import "./modal.scss";

type ModalProps = {
  open: boolean;
  close: () => void;
  header: string;
  children: React.ReactNode;
};

const Modal = (props: ModalProps) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  // console.log({props.children});

  return (
    // 모달이 열릴 때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children} </main>
          <footer>
            <button className="close" onClick={close}>
              닫기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
