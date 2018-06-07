var sourceStr = context.getVariable("source");
var destinationStr = context.getVariable("destination");
var adults = context.getVariable("request.queryparam.adults");
var isValidRequest = true;
if( (sourceStr === null) || (sourceStr === "") || (typeof sourceStr !== "string" ) ) {
    isValidRequest = false;
}
if( (destinationStr === null) || (destinationStr === "") || (typeof destinationStr !== "string" ) ) {
    isValidRequest = false;
}
if ( ! isValidRequest ) {
    context.setVariable("isValidRequest", isValidRequest);
    context.setVariable("statusCode", 400);
    context.setVariable("errorId", "invalid_request");
    context.setVariable("errorDesc", "Missing one or more mandatory parameters");
}