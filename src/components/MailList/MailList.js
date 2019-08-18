// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React from 'react';

import { Link } from 'react-router-dom';
import style from './MailList.module.css';

const MailList = ({ type, mails }) => (
  <div className={style.container + ` t-${type}-list`}>
    {mails.map(mail => (
      <Link key={mail.id} className={style.link} to={`/app/${type}/${mail.id}`}>
        {`${mail.body.substr(0, 52)}...`}
      </Link>
    ))}
  </div>
);

export default MailList;
