import { useState } from "react";
import { useInput } from "../util/common";
export default function Register() {
  const onClickBtn = () => {
    if (!(id.value && pw.value && pwc.value && name.value))
      return alert("모두 입력해주세요");
    else if (pw.value != pwc.value)
      return alert("비밀번호와 비밀번호체크가 같지 않습니다");
    else if (regExp.test(id.value) == false)
      return alert("이메일형식 지켜주세요");
    else return alert("회원가입에 성공하셨습니다.");
  };
  var emailcheck =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const id = useInput("");
  const pw = useInput("");
  const pwc = useInput("");
  const name = useInput("");
  return (
    <div>
      <h1>회원가입</h1>
      id: <input type="email" {...id} />
      <br />
      PW: <input type="password" {...pw} />
      <br />
      PWc: <input type="password" {...pwc} />
      <br />
      Name: <input type="text" {...name} />
      <br />
      <button onClick={onClickBtn}>회원가입</button>
    </div>
  );
}
