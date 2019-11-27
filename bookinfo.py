import urllib.request
import json
from collections import OrderedDict

def bookinfo_json(bookname):
    bookInfo = OrderedDict()
    searchBook = OrderedDict()

    client_id = "rD4sPe51j0K1J7gO37IY"  # 애플리케이션 등록시 발급 받은 값 입력
    client_secret = "OshQx1OW9d"  # 애플리케이션 등록시 발급 받은 값 입력
    encText = urllib.parse.quote(bookname)
    url = "https://openapi.naver.com/v1/search/book.json?query=" + encText + "&display=1&sort=count"
    request = urllib.request.Request(url)
    request.add_header("X-Naver-Client-Id", client_id)
    request.add_header("X-Naver-Client-Secret", client_secret)
    response = urllib.request.urlopen(request)

    rescode = response.getcode()

    if (rescode == 200):
        response_body = response.read()
        isbn = json.loads(response_body)
        for i in range(0, isbn["display"]):
            isbn_13 = isbn["items"][i]["isbn"]
            isbn_13 = isbn_13[11:24]

            url_naru = 'http://data4library.kr/api/'
            url_naru += 'srchDtlList?authKey=0fa6d79d61e3a3d1fd35769e5bd381020efa73b402adc57b894d3fd0831c21c6'
            url_naru += '&isbn13=%s&loaninfoYN=Y&displayInfo=age&format=json' % isbn_13

            u = urllib.request.urlopen(url_naru)
            bookdata = json.loads(u.read())

            class_no = bookdata["response"]["detail"][0]["book"]["class_no"]
            class_no.replace('"', '')
            class_no = int(float(class_no))
            class_no /= 100
            class_no = int(class_no)

            if class_no == 0:
                class_name = "총류"
                bookInfo["class_no"] = class_name
            elif class_no == 1:
                class_name = "철학"
                bookInfo["class_no"] = class_name
            elif class_no == 2:
                class_name = "종교"
                bookInfo["class_no"] = class_name
            elif class_no == 3:
                class_name = "사회과학"
                bookInfo["class_no"] = class_name
            elif class_no == 4:
                class_name = "자연과학"
                bookInfo["class_no"] = class_name
            elif class_no == 5:
                class_name = "기술과학"
                bookInfo["class_no"] = class_name
            elif class_no == 6:
                class_name = "예술"
                bookInfo["class_no"] = class_name
            elif class_no == 7:
                class_name = "언어"
                bookInfo["class_no"] = class_name
            elif class_no == 8:
                class_name = "문학"
                bookInfo["class_no"] = class_name
            elif class_no == 9:
                class_name = "역사"
                bookInfo["class_no"] = class_name

            bookInfo["bookname"] = bookdata["response"]["detail"][0]["book"]["bookname"]
            bookInfo["authors"] = bookdata["response"]["detail"][0]["book"]["authors"]
            bookInfo["class_no"] = class_name
            bookInfo["bookImageURL"] = bookdata["response"]["detail"][0]["book"]["bookImageURL"]
            bookInfo["description"] = bookdata["response"]["detail"][0]["book"]["description"]

            searchBook["bookInfo"] = bookInfo
            #with open('book.json', 'w', encoding = "utf-8") as make_file:
            #    json.dump(searchBook, make_file, ensure_ascii=False, indent = "\t")



    else:
        print("Error Code:" + rescode)

    return json.dumps(searchBook, ensure_ascii=False, indent="\t")
    #return 'book.json'

a = input("책 제목 : ")
print(bookinfo_json(a))
