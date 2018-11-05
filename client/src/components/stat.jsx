import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../dist/styles/stat.css';

const Stat = props => (
  <tr>
    <td>
      <img className={styles.instructorIcon} src={props.image}></img>
    </td>
    <td>
      <span className={styles.instructorStat}>{props.stat}</span>
      <span className={styles.instructorStatText}>{props.text}</span>
    </td>
  </tr>
);

export default Stat;

Stat.propTypes = {
  image: PropTypes.string,
  stat: PropTypes.string,
  text: PropTypes.string,
};
