// CppTutorial.cpp: 콘솔 응용 프로그램의 진입점을 정의합니다.
//

#include "stdafx.h"

void MenuLobby();
void MenuMap();

int main()
{
	while (true)
	{
		system("cls");
		MenuLobby();

		int iMenu;
		cin >> iMenu;

		if (cin.fail())
		{
			cin.clear();
			cin.ignore(1024, '\n');
			continue;
		}

		if (iMenu == MM_EXIT)
			break;

		switch (iMenu)
		{
		case MM_MAP:
			while (true)
			{
				system("cls");
				MenuMap();
				cin >> iMenu;

				if (cin.fail())
				{
					cin.clear();
					cin.ignore(1024, '\n');
					continue;
				}

				if (iMenu == MT_BACK)
					break;

			}
			break;
		case MM_STORE:
			break;
		case MM_INVENTORY:
			break;
		default:
			cout << "잘못 선택 하셨습니다. " << endl;
			break;
		}
	}


    return 0;
}
void MenuLobby()
{
	cout << "****************** 로비 ******************" << endl;
	cout << "1. 맵" << endl;
	cout << "2. 상점" << endl;
	cout << "3. 가방" << endl;
	cout << "4. 종료" << endl;
	cout << "메뉴를 선택하세요 : ";
}
void MenuMap()
{
	cout << "****************** 맵 ******************" << endl;
	cout << "1. 쉬움" << endl;
	cout << "2. 보통" << endl;
	cout << "3. 어려움" << endl;
	cout << "4. 뒤로가기" << endl;
	cout << "맵을 선택하세요 : ";
}