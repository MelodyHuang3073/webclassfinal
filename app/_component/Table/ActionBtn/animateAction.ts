import Swal from "sweetalert2";

export const successs = (title: string) => {
  Swal.fire({
    showConfirmButton: false,
    title,
    icon: "success",
    timer: 1200,
  });
};

export const fail = (title: string) => {
  Swal.fire({
    showConfirmButton: false,
    title,
    icon: "error",
    timer: 1200,
  });
};
