function Mixcolor(color1, color2) {
    let resultinColor;
    switch (color1) {
        case "red":
            switch (color2) {
                case "blue":
                    resultinColor = "purple";
                    break;
                case "yellow":
                    resultinColor = "orange";
                    break;
                default:
                    resultinColor = "Invalid color combination";
                    break;
            }
            break;
        case "blue":
            switch (color2) {
                case "red":
                    resultinColor = "purple"
                    break;
                case "yellow":
                    resultinColor = "green"
                    break;
                default:
                    resultinColor = "Invalid color combination"
                    break;

            }
            break;
        case "yellow":
            switch (color2) {
                case "red":
                    resultinColor = "orange"
                    break;
                case "blue":
                    resultinColor = "green"
                    break;
                default:
                    resultinColor = "Invalid color combination"
                    break
            }
            break;
        default:
            resultinColor = "Invalid color combination"
            break;
    }
    console.log(resultinColor)
}
Mixcolor("red","yellow")