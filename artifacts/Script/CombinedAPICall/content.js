const opts = {
  parameters: { system: "CLD" }
}

try {
  // Send api request.
  const response1 = await apis.Y(opts);

  // Call another API here
  const response2 = await apis.Y(opts);

  // Combine items from both responses
  result.data = {
    Docs4Receiving: response1.data.Docs4Receiving.concat(response2.data.Docs4Receiving) 
  };

  complete();

} catch (error) {
  log.error("Error in request: ", error);
  return fail();
}
