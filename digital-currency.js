/**
 * Convert hashrate in H/s to proper unit
 * @param {number} hash - hashrate in H/s
 * @param {number} accuracy - how many figures kept after the point
 * @returns {string} hashrate string
 */
const formatHashrate = (hash, accuracy) => {
  if (hash > 1e9) {
    return (hash / 1e9).toFixed(accuracy).toString() + " GH/s";
  }
  if (hash > 1e6) {
    return (hash / 1e6).toFixed(accuracy).toString() + " MH/s";
  }
  if (hash > 1e3) {
    return (hash / 1e3).toFixed(accuracy).toString() + " KH/s";
  }
  return hash.toFixed(accuracy).toString() + " H/s";
}

/**
 * Convert amount in MiB to proper unit
 * @param {number} amount - amount in MiB
 * @param {number} accuracy - how many figures kept after the point
 * @returns {string} result string
 */
const convertMiB = (amount, accuracy) => {
  if (amount < 1024) return `${amount} MiB`;
  if (amount < 1024 * 1024) return `${(amount / 1024).toFixed(accuracy)} GiB`;
  if (amount < 1024 * 1024 * 1024) return `${(amount / 1024 / 1024).toFixed(accuracy)} TiB`;
  if (amount < (1024 ** 4)) return `${(amount / 1024 / 1024 / 1024).toFixed(accuracy)} PiB`;
  return `${(amount / (1024 ** 4)).toFixed(accuracy)} EiB`
}

/**
 * Convert seconds to time block (zh-CN)
 * @param {number} seconds - seconds
 * @param {number} accuracy - how many figures kept after the point
 * @returns {string} hashrate string
 */
const toTimeBlockZh = (seconds, accuracy) => {
  if (seconds < 60) return `${(seconds).toFixed(accuracy)} 秒`;
  if (seconds < 60 * 60) return `${(seconds / 60).toFixed(accuracy)} 分钟`;
  if (seconds < 60 * 60 * 24) return `${(seconds / 60 / 60).toFixed(accuracy)} 小时`;
  return `${(seconds / 60 / 60 / 24).toFixed(accuracy)} 天`;
}

/**
 * Convert seconds to time block
 * @param {number} seconds - seconds
 * @param {number} accuracy - how many figures kept after the point
 * @returns {string} hashrate string
 */
const toTimeBlockEn = (seconds, accuracy) => {
  if (seconds < 60) return `${(seconds).toFixed(accuracy)} second(s)`;
  if (seconds < 60 * 60) return `${(seconds / 60).toFixed(accuracy)} minute(s)`;
  if (seconds < 60 * 60 * 24) return `${(seconds / 60 / 60).toFixed(accuracy)} hour(s)`;
  return `${(seconds / 60 / 60 / 24).toFixed(accuracy)} day(s)`;
}