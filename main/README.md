Do rozwiązania podanego problemu został użyty algorytm, który wymaga obiektu, który przechowuje  rzymskie znaki. Wartości i klucze znajdujące się w obiekcie muszą być odpowiednio posortowane. Obiekt letters znajduje się w pliku config.json, może zostać w przyszłości rozbudowany o obsługę większych liczb.

W celu zapewnienia odpowiedniej kolejności kluczy i wartości w obiekcie została napisana funkcja sortObjectByValue, dzięki temu program nie jest zależny od kolejności wprowadzenia wartości do pliku konfiguracyjnego oraz od specyfiki języka, który nie zapewnia kolejności wartości w obiekcie.

Metoda odpowiedzialna za zamianę liczb arabskich na rzymskie jest zewnętrznym modułem, co ułatwi testowanie funkcjonalności. Moduł jest zaimportowany w pliku main.js pod nazwą romanNumeralConvertor.

Przykładowe wywołanie programu:
node main 123
