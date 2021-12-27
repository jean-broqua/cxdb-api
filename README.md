# Canoas Xis Database

This is a simple API containing reviews from some xis places in Canoas - RS

### Exemple

cxdb.jeanbroqua.com/api/search?name=cia

    {
        "id": "3",
        "name": "Cia do Xis",
        "address": "Centro, Canoas",
        "contact": "(99) 99999-9999",
        "min_price": "21",
        "max_price": "35"
	}

###  Endpoints
**/search**
Fetch the stored xis places

### Search Params
**id
name
address
contact
min_price
max_price**
