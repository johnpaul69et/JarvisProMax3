import time, requests
while True:
    try:
        print(requests.get("https://your-server/ask").text)
    except:
        pass
    time.sleep(5)
