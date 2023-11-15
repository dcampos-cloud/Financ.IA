import pandas_datareader.data as web
import pandas as pd

end = "2022-12-15"
start = "2019-12-15"

data = web.get_data_yahoo(symbols=['VGIR11.SA'], start=start, end=end)
print(data)