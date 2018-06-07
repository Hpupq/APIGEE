var responsePayload = context.getVariable("response.content");
 responseJSON = JSON.parse(responsePayload);
 responseJSON.token_type = "Bearer";
 context.setVariable("response.content", JSON.stringify(responseJSON));