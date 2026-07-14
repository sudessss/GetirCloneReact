import React, { useState } from "react";
import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons'; 

function Index() { // Büyük harf uyarısını engellemek için Index yaptık
  const [details, setDetails] = useState<string[]>([
    "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti", // Artık index === 0 bu eleman
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek Bilgiler",
  ]);

  const TextComponent = ({ detail, index }: { detail: string; index: number }) => {
    return (
      <View
        style={{
          paddingVertical: 12,
          borderBottomWidth: index === details.length - 1 ? 0 : 0.3,
          borderBottomColor: "lightgray",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            // Sadece ilk eleman (açıklama metni) siyah, diğer menüler gri olsun
            color: index === 0 ? "black" : "#687482",
            fontSize: 13,
            // Açıklama metni regular (400), menü başlıkları medium (500)
            fontWeight: index === 0 ? "400" : "500",
          }}
        >
          {detail}
        </Text>
        
        {/* İlk eleman açıklama metni olduğu için ona ok koymuyoruz, diğerlerine koyuyoruz */}
        {index !== 0 && <Feather name="chevron-down" size={24} color="#9F9F9F" />}
      </View>
    );
  };

  return (
    <View >
      {/* "Detaylar" başlığını listeye dahil etmeden en üste sabit olarak ekledik */}
      <Text style={{ color: "#687482", fontSize: 11, fontWeight: "500", marginTop: 25}}>
      </Text>
<View style={{ paddingHorizontal: 16, paddingVertical: 8, backgroundColor: "white" }}>
     {/* Dinamik listenin render edildiği yer */}
      {details.map((item, index) => (
        <TextComponent key={index} detail={item} index={index} />
      ))}
</View>
     
    </View>
  );
}

export default Index;