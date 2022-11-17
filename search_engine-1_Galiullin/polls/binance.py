import json
import requests
from django.http import HttpResponse, HttpResponseNotFound, Http404
from django.shortcuts import render,redirect
from polls import main
def binance():
    key = 'https://api.binance.com/api/v3/ticker/price?symbol='
    currencies = ['BTCUSDT', 'ETHUSDT']
    j = 0
    j = int(j)
    spisok = []
    for i in currencies:
        url = key+currencies[j]
        data = requests.get(url)
        data = data.json()
        symbol = data['symbol']
        price = data['price']
        price1 = price[:8]
        spisok.append(symbol)
        spisok.append(price1)
        j = j + 1
        a = ' '.join(spisok)
    return a
print(binance())