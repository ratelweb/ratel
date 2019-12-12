import urllib.request
import json
from collections import OrderedDict

# 도서추천 ==> 책 이름을 입력하면 NAVER API 에서 isbn번호를 얻고 그 번호를 정보나루 API에 전달하면 검색한 도서와 함께 대출한 도서들을 기준으로 추천해줌.
# 도서는 최대 200권 까지 추천 받을수 있음.
# 추천 도서 권수를 바꾸는 것은 밑에 표시
#bookname = string


def recommand(isbn):
    R_book = OrderedDict()

    url_naru = 'http://data4library.kr/api/'
    url_naru += 'recommandList?authKey=0fa6d79d61e3a3d1fd35769e5bd381020efa73b402adc57b894d3fd0831c21c6'
    url_naru += '&isbn13=%s&format=json' % isbn

    u = urllib.request.urlopen(url_naru)
    recommand = json.loads(u.read())

    R_book["Recommand"] = []
    # 20을 다른 숫자로 바꾸면 추천 도서 권수가 바뀜
    for i in range(0, recommand["response"]["resultNum"], 1):
        R_book["Recommand"].append({
            "bookname": recommand["response"]["docs"][i]["book"]["bookname"],
            "authors": recommand["response"]["docs"][i]["book"]["authors"],
            "publisher": recommand["response"]["docs"][i]["book"]["publisher"],
            "isbn": recommand["response"]["docs"][i]["book"]["isbn13"],
            "image": recommand["response"]["docs"][i]["book"]["bookImageURL"],
            # "description": recommand["response"]["docs"][i]["book"]["description"]
        })

    # json 형식으로 return
    return json.dumps(R_book, ensure_ascii=False, indent="\t")

# 책 이름으로 책 정보 출력 ==> 도서명, 저자, 출판사, 책 표지 url, 책소개, isbn
#bookname = string
# isbn으로 책 정보 얻기 어려울거 같을 때 사용 (같은 책 이름, 다른 책 인경우가 있어서 정확도 떨어짐.)


def Bookinfo_Name(bookname):
    book = OrderedDict()
    bookInfo = OrderedDict()

    client_id = "rD4sPe51j0K1J7gO37IY"  # 애플리케이션 등록시 발급 받은 값 입력
    client_secret = "OshQx1OW9d"  # 애플리케이션 등록시 발급 받은 값 입력
    encText = urllib.parse.quote(bookname)
    url = "https://openapi.naver.com/v1/search/book.json?query=" + \
        encText + "&display=1&sort=count"
    request = urllib.request.Request(url)
    request.add_header("X-Naver-Client-Id", client_id)
    request.add_header("X-Naver-Client-Secret", client_secret)
    response = urllib.request.urlopen(request)
    rescode = response.getcode()

    if (rescode == 200):
        response_body = response.read()
        isbn = json.loads(response_body)

        isbn_13 = isbn["items"][0]["isbn"]
        isbn_13 = isbn_13[11:24]

        url_naru = 'http://data4library.kr/api/'
        url_naru += 'srchDtlList?authKey=0fa6d79d61e3a3d1fd35769e5bd381020efa73b402adc57b894d3fd0831c21c6'
        url_naru += '&isbn13=%s&loaninfoYN=Y&displayInfo=age&format=json' % isbn_13

        u = urllib.request.urlopen(url_naru)
        bookdata = json.loads(u.read())

        print(bookdata)

        bookInfo["bookname"] = bookdata["response"]["detail"][0]["book"]["bookname"]
        bookInfo["authors"] = bookdata["response"]["detail"][0]["book"]["authors"]
        bookInfo["publisher"] = bookdata["response"]["detail"][0]["book"]["publisher"]
        bookInfo["bookImageURL"] = bookdata["response"]["detail"][0]["book"]["bookImageURL"]
        bookInfo["description"] = bookdata["response"]["detail"][0]["book"]["description"]
        bookInfo["isbn"] = bookdata["response"]["detail"][0]["book"]["isbn13"]
        book["bookInfo"] = bookInfo
    else:
        print("Error Code:" + rescode)

    # json 형식으로 return
    return json.dumps(book, ensure_ascii=False, indent="\t")

# 책 isbn으로 책 정보 출력 책 이름으로 찾는거 보다 더욱 정확함.
#isbn = string


def Bookinfo_Isbn(isbn):
    book = OrderedDict()
    bookInfo = OrderedDict()

    url_naru = 'http://data4library.kr/api/'
    url_naru += 'srchDtlList?authKey=0fa6d79d61e3a3d1fd35769e5bd381020efa73b402adc57b894d3fd0831c21c6'
    url_naru += '&isbn13=%s&loaninfoYN=Y&displayInfo=age&format=json' % isbn

    u = urllib.request.urlopen(url_naru)
    bookdata = json.loads(u.read())

    print(bookdata)
    bookInfo["bookname"] = bookdata["response"]["detail"][0]["book"]["bookname"]
    bookInfo["authors"] = bookdata["response"]["detail"][0]["book"]["authors"]
    bookInfo["publisher"] = bookdata["response"]["detail"][0]["book"]["publisher"]
    bookInfo["bookImageURL"] = bookdata["response"]["detail"][0]["book"]["bookImageURL"]
    bookInfo["description"] = bookdata["response"]["detail"][0]["book"]["description"]
    bookInfo["isbn"] = bookdata["response"]["detail"][0]["book"]["isbn13"]
    book["bookInfo"] = bookInfo
    print(book)

    # json 형식으로 return
    return book

#bookname = string
# 도서 검색시 사용
# 도서 이름, 저자, 출판사, 내용요약, isbn정보


def searchBook(bookname):
    search1 = OrderedDict()

    client_id = "rD4sPe51j0K1J7gO37IY"  # 애플리케이션 등록시 발급 받은 값 입력
    client_secret = "OshQx1OW9d"  # 애플리케이션 등록시 발급 받은 값 입력
    encText = urllib.parse.quote(bookname)
    # display의 최소 검색 수는 10권이고, &display= 뒤에 숫자를 입력하면 건수를 지정할수 있음(최대 100권)
    url = "https://openapi.naver.com/v1/search/book.json?query=" + \
        encText + "&display=20&sort=count"
    request = urllib.request.Request(url)
    request.add_header("X-Naver-Client-Id", client_id)
    request.add_header("X-Naver-Client-Secret", client_secret)
    response = urllib.request.urlopen(request)
    rescode = response.getcode()

    if (rescode == 200):
        response_body = response.read()
        search = json.loads(response_body)

        print(search)

        search1["search"] = []

        for i in range(0, search["display"], 1):
            isbn13 = search["items"][i]["isbn"]
            isbn13 = isbn13[11:24]
            search1["search"].append({
                "bookname": search["items"][i]["title"],
                "author": search["items"][i]["author"],
                "publisher": search["items"][i]["publisher"],
                "description": search["items"][i]["description"],
                "image": search["items"][i]["image"],
                "isbn": isbn13
            })

        return search1


if __name__ == "__main__":
    a = input("책 이름 : ")  # 입력은 string
    print(recommand(a))

    # print(Bookinfo_Name(a)) # 입력은 string

    # test : 9788956604992 (7년의 밤)
    #b = input("isbn : ")
    # print(Bookinfo_Isbn(b))

    # print(searchBook(a))
