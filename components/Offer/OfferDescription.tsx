import SectionWrapper from '../../ui/SectionWrapper';
import { View, StyleSheet } from 'react-native';
import SectionTitle from '../../ui/SectionTitle';
import { ourOfferTitle } from '../../assets/languages';
import { IcoMoon_pwai } from '../../ui/IcoMoon';
import { GlobalStyles } from '../../constants/styles';
import Accordion from '../../ui/Accordion';
import { useState } from 'react';
import { WebView } from 'react-native-webview';
import useOffers from '../../hooks/useOffers';
import { getCurrentObject } from '../../utils/helper';

function OfferDescription() {
  const [openAccordion, setOpenAccordion] = useState(false);
  const [accordionHeight, setAccordionHeight] = useState(0);

  const { currentOfferId, offers } = useOffers();
  const currentOffer = getCurrentObject(offers, currentOfferId);

  const handleClickOpenAccordion = () => {
    setOpenAccordion((prev) => !prev);
  };

  const handleMessage = (event: any) => {
    const height = parseFloat(event.nativeEvent.data);
    if (!isNaN(height)) {
      setAccordionHeight(height);
    }
  };

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body, html {
          margin: -6px 0 0 0;
            padding: 0;
            color: ${GlobalStyles.colors.neutralGray_dark};
            font-family: "Lato", sans-serif;
            line-height: 23px;
          }
        </style>
      </head>
      <body>
        ${currentOffer?.description || ''}
        <script>
          (function() {
            function sendHeight() {
              const height = document.body.scrollHeight;
              window.ReactNativeWebView.postMessage(height);
            }

            // Send initial height after content is loaded
            window.onload = sendHeight;

          })();
        </script>
      </body>
    </html>
  `;

  console.log(currentOffer?.description);

  const description = (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SectionTitle title={ourOfferTitle[1]} />
        <IcoMoon_pwai
          name="arrow-back"
          size={20}
          onPress={handleClickOpenAccordion}
          style={{
            color: GlobalStyles.colors.accentGold,
            height: 20,
            width: 20,
            transform: [{ rotate: openAccordion ? '90deg' : '-90deg' }],
          }}
        />
      </View>

      <Accordion open={openAccordion}>
        <View style={{ height: accordionHeight }}>
          <WebView
            originWhitelist={['*']}
            source={{ html: htmlContent }}
            scrollEnabled={false}
            onMessage={handleMessage}
          />
        </View>
      </Accordion>
    </View>
  );

  return currentOffer?.description && description;
}

export default OfferDescription;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accordionText: {
    color: GlobalStyles.colors.neutralGray_dark,
  },
});
