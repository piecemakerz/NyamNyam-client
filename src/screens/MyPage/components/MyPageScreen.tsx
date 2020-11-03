import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

import { MINT, MINT_RGBA_LINE, MINT_STRONG } from '@base/baseColors';
import { MyPageProps } from '@base/types/Navigation/MyPageNavigation';
import { MyInfo } from '@base/types/mypage';

type MyPageScreenProps = {
  navigation: MyPageProps['navigation'];
  myPageInfo: any;
  handleSignoutButtonPress: () => void;
};

export default function MyPageScreen({
  navigation,
  myPageInfo,
  handleSignoutButtonPress,
}: MyPageScreenProps) {
  const { username, email, store, production, upload, userImg } = myPageInfo;
  const avatar = userImg
    ? { uri: userImg }
    : require('@base/../assets/images/default_user_avatar.jpg');

  return (
    <MyPageContainer>
      <MyPageTitle>내 정보</MyPageTitle>

      <MyPageUserInfo>
        <UserAvatar source={avatar} />
        <UserTextWrapper>
          <UserNameText>{username}</UserNameText>
          <UserInfoText>
            {email} {'\n'}사장님
          </UserInfoText>
        </UserTextWrapper>
      </MyPageUserInfo>

      <MyPageBriefInfo>
        <BriefInfoRow>
          <BriefInfoContent>{store}</BriefInfoContent>
          <BriefInfoTitle>내 가게</BriefInfoTitle>
        </BriefInfoRow>

        <BriefInfoRow>
          <BriefInfoContent>{production}</BriefInfoContent>
          <BriefInfoTitle>내 상품 수</BriefInfoTitle>
        </BriefInfoRow>
        <BriefInfoRow>
          <BriefInfoContent>{upload}</BriefInfoContent>
          <BriefInfoTitle>내역 업로드 수</BriefInfoTitle>
        </BriefInfoRow>
      </MyPageBriefInfo>

      <MyPageNavContainer>
        <Button
          title="내 정보 수정"
          type="outline"
          containerStyle={{ marginBottom: 20 }}
          titleStyle={{ color: MINT_STRONG, fontSize: 20, fontWeight: 'bold' }}
          buttonStyle={{ borderColor: MINT, borderWidth: 2 }}
          onPress={() => navigation.navigate('ModifyMyInfo')}
        />
        <Button
          title="내 메뉴 관리하기"
          type="outline"
          titleStyle={{ color: MINT_STRONG, fontSize: 20, fontWeight: 'bold' }}
          containerStyle={{ marginBottom: 20 }}
          buttonStyle={{ borderColor: MINT, borderWidth: 2 }}
          onPress={() => navigation.navigate('MyMenuListInfo')}
        />
        <Button
          title="매장 편집하기"
          type="outline"
          titleStyle={{ color: MINT_STRONG, fontSize: 20, fontWeight: 'bold' }}
          containerStyle={{ marginBottom: 20 }}
          buttonStyle={{ borderColor: MINT, borderWidth: 2 }}
          onPress={() => navigation.navigate('MyStoreListInfo')}
        />
        <Button
          title="로그아웃"
          type="outline"
          titleStyle={{ color: MINT_STRONG, fontSize: 20, fontWeight: 'bold' }}
          containerStyle={{ marginBottom: 20 }}
          buttonStyle={{ borderColor: MINT, borderWidth: 2 }}
          onPress={() =>
            Alert.alert(
              '로그아웃',
              '로그아웃 하시겠습니까?',
              [
                {
                  text: '취소',
                  style: 'cancel',
                },
                { text: '확인', onPress: handleSignoutButtonPress },
              ],
              { cancelable: false }
            )
          }
        />
      </MyPageNavContainer>
    </MyPageContainer>
  );
}

const MyPageContainer = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

const MyPageTitle = styled.Text`
  text-align: center;
  font-size: 35px;
  font-family: 'BMHANNA';
  color: ${MINT};
  margin: 20px 0;
`;

const MyPageUserInfo = styled.View`
  margin: 10px 0;
  padding: 0 20px;
  flex-direction: row;
`;

const UserAvatar = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  opacity: 1;
`;

const UserTextWrapper = styled.View``;

const UserNameText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  font-family: 'BMHANNA';
  color: ${MINT_STRONG};
`;

const UserInfoText = styled.Text`
  font-size: 15px;
  opacity: 1;
  font-family: 'BMHANNA';
  color: ${MINT};
`;

const MyPageBriefInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 70px;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-top-color: ${MINT_RGBA_LINE};
  border-bottom-color: ${MINT_RGBA_LINE};
`;

const BriefInfoRow = styled.View`
  align-items: center;
`;

const BriefInfoContent = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${MINT_STRONG};
`;

const BriefInfoTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${MINT};
`;

const MyPageNavContainer = styled.View`
  padding: 40px;
`;
