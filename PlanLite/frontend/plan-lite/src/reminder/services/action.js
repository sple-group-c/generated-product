const action = (payload) => {
  console.log("[dummy action]", payload);
  return Promise.resolve({
    data: {
      data: { ok: true },
    },
  });
};

export default action;
