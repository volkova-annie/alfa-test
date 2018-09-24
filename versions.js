function getVersion( ver ) {
  versions.sort((a, b) => b.localeCompare(a, undefined, { numeric:true }));

  const verAsArr = ver.split('.');
  let versionDot = 0;
  let nextMax = versions[0];

  for (let i = 0; i < versions.length; i++) {
    let versionsItem = versions[i].split('.');
    const maxLength = Math.max(verAsArr.length, versionsItem.length);
    for (let j = versionDot; j < maxLength; j++) {
      if (verAsArr[j] === versionsItem[j]) {
        versionDot++;
        nextMax = versions[i];
      }
    }
    if (versionDot >= verAsArr.length) {
      break;
    }
  }
  return nextMax;
}

versions = [
    '1.0.0',
    '1.1.5',
    '1.1.7',
    '1.1.90',
    '1.2.0',
    '1.2.2',
    '3.5.2',
    '1.2.23',
    '1.22.3',
    '1.2.5',
    '1.3.0',
    '1.1.50',
    '1.1.190',
    '1.3.7'
];

getVersion('1.1'); // → 1.1.190
getVersion('1.1.7'); // → 1.1.7
getVersion('1.2'); // → 1.2.23
getVersion('1.'); // → 1.3.7
