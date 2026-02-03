// ===== Enums =====

// Перечисления (Enums) позволяют создавать набор именованных констант, что улучшает читаемость и поддержку кода.

enum statusCode {
  SUCCESS = 200,
  IN_PROGRESS = 300,
  FAILED = 400,
}

const res = {
  message: "Платёж успешно выполнен",
  status: statusCode.FAILED,
};

if (res.status === statusCode.SUCCESS) {
  console.log("Статус:", res.status, "-", res.message);
} else if (res.status === statusCode.IN_PROGRESS) {
  console.log("Статус:", res.status, "- Платёж в процессе");
} else if (res.status === statusCode.FAILED) {
  console.log("Статус:", res.status, "- Платёж не выполнен");
}

function getStatusMessage(status: statusCode): string {
  switch (status) {
    case statusCode.SUCCESS:
      return "Платёж успешно выполнен";
    case statusCode.IN_PROGRESS:
      return "Платёж в процессе";
    case statusCode.FAILED:
      return "Платёж не выполнен";
    default:
      return "Неизвестный статус";
  }
}

console.log(getStatusMessage(statusCode.SUCCESS));
console.log(getStatusMessage(statusCode.IN_PROGRESS));
console.log(getStatusMessage(statusCode.FAILED));
console.log(getStatusMessage(statusCode.FAILED + 1));

// Enums помогают сделать код более понятным и управляемым,
// предоставляя именованные константы вместо "магических чисел".