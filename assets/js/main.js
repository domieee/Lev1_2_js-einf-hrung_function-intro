function intro2(paramName) {
        // Wir definieren unsere Funktion, und sagen ihr, dass sie einen Parameter entgegeben nehmen soll
        // Die Variable die wir als Argument übergeben haben, wird als Parameter entgegen genommen.
        // Ohne Argument ist das Ergebnis 'undefinied'

    const varName = "SuperCoder"
        // Wir speichern einen String in einer Variable

    console.log("Hi, " + varName + ". Mein Name ist " + paramName + ".");
    
        // Und geben anschließen den Satz 'Hi, SuperCoder. Mein Name ist Dominik.' in der Konsole aus

}

intro2("Dominik");
    // Ruft unseren Funktionsblock auf übergibt das Argument "Dominik"