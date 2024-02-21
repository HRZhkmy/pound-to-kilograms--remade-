function calculateConversion() 
{
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var conversionType = document.getElementById("conversionType").value;
    var result;
    
	if (conversionType === "kgToLb") 
	
	{
        result = inputValue * 2.20462;
    } 
	
	else if(conversionType === "lbToKg") 
	
	{
        result = inputValue / 2.20462;
    } 
	
	else
		
	{
        alert("Invalid conversion type!");
        return;
    }

    document.getElementById("resultContainer").innerHTML = "Result: " + result.toFixed(2);
}
