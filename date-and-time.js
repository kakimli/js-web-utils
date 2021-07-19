/**
 * Fill zero before the figure if necessary
 * @param {number} num - the figure
 * @returns {string} formatted string
 */
const fillWithZero = (num) => {
  return num < 10 ? `0${num}`: `num`;
}

/**
 * Format date input
 * @param {Date | number} time - date input
 * @param {number} pattern - the format pattern
 * @returns {string} date formatted
 */
const formatDate = (time, pattern = 1) => {
  let dateObj;
  if (typeof time === 'number') {
    dateObj = new Date(time);
  } else if (typeof time === 'object') {
    dateObj = time;
  } else {
    return 'INVALID_INPUT';
  }
  const year = DateObj.getFullYear();
  const month = fillWithZero(DateObj.getMonth() + 1);
  const date = fillWithZero(DateObj.getDate());
  const hours = fillWithZero(DateObj.getHours());
  const minutes = fillWithZero(DateObj.getMinutes());
  const seconds = fillWithZero(DateObj.getSeconds());
  if (pattern === 1) {
    /* XXXX-XX-XX XX-XX-XX */
    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  }
  if (pattern === 2) {
    /* XXXX-XX-XX XX-XX */
    return `${year}-${month}-${date} ${hours}:${minutes}`;
  }
  if (pattern === 3) {
    /* XXXX-XX-XX */
    return `${year}-${month}-${date}`;
  }
  if (pattern === 4) {
    /* XX-XX */
    return `${year}-${month}`;
  }
  if (pattern === 5) {
    /* XX-XX XX-XX */
    return `${month}-${date} ${hours}:${minutes}`;
  }
}

/**
 * Convert to update time string (zh-CN)
 * @param {number} time - the difference in seconds between current time and the update time
 * @returns {string} update time string
 */
const toUpdateTimeZh = (time) => {
  if (time < 60) {
    return '几秒前';
  } else if (time < 3600) {
    const minutes = Math.floor(time / 60);
    return `${minutes} 分钟前`;
  } else if (time < 24 * 3600) {
    const hours = Math.floor(time / 3600);
    return `${hours} 小时前`;
  } else if (time < 30 * 24 * 3600) {
    const days = Math.floor(time / (24 * 3600));
    return `${days} 天前`;
  } else if (time < 365 * 24 * 3600) {
    const months = Math.floor(time / (30 * 24 * 3600));
    return `${months} 月前`;
  } else {
    const years = Math.floor(time / (365 * 30 * 24 * 3600));
    return `${years} 年前`;
  }
}

/**
 * Convert to update time string (en-US)
 * @param {number} time - the difference in seconds between current time and the update time
 * @returns {string} update time string
 */
const toUpdateTimeEn = (time) => {
  if (time < 60) {
    return 'Several seconds ago';
  } else if (time < 3600) {
    const minutes = Math.floor(time / 60);
    return `${minutes} minutes ago`;
  } else if (time < 24 * 3600) {
    const hours = Math.floor(time / 3600);
    return `${hours} hours ago`;
  } else if (time < 30 * 24 * 3600) {
    const days = Math.floor(time / (24 * 3600));
    return `${days} days ago`;
  } else if (time < 365 * 24 * 3600) {
    const months = Math.floor(time / (30 * 24 * 3600));
    return `${months} months ago`;
  } else {
    const years = Math.floor(time / (365 * 30 * 24 * 3600));
    return `${years} years ago`;
  }
},