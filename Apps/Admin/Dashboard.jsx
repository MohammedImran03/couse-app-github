import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.mainPanel}>
      <View style={styles.contentWrapper}>
        <View style={styles.pageHeader}>
          <Text style={styles.headerText}>Hi, welcome back! <Text style={styles.subHeaderText}>Web Analytics Dashboard.</Text></Text>
        </View>

        <View style={styles.row}>
     
          <View style={[styles.colXL3, styles.stretchCard, styles.gridMargin]}>

            <View style={[styles.colXL12, styles.colMD6, styles.stretchCard, styles.gridMargin, styles.pbSm3]}>
           
              <View style={[styles.card, styles.bgWarning]}>

                <View style={[styles.cardBody, styles.px3, styles.py4]}>
            
                  <View style={[styles.dFlex, styles.justifyContentBetween, styles.alignItemsStart]}>
                    <View style={styles.colorCard}>
                      <Text style={styles.colorCardHead}>Sales</Text>
                      <Text style={styles.textWhite}>₹8,753.<Text style={styles.h5}>00</Text></Text>
                    </View>
                    <View style={styles.cardIconIndicator}>
             
                    </View>
                  </View>
                  <Text style={styles.textWhite}>18.33% Since last month</Text>
                </View>
              </View>
            </View>
     
          </View>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPanel: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  contentWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  pageHeader: {
    marginTop: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  colXL3: {
    width: '25%',
  },
  stretchCard: {
    flex: 1,
  },
  gridMargin: {
    marginHorizontal: 5,
  },
  colXL12: {
    width: '100%',
  },
  colMD6: {
    width: '50%',
  },
  pbSm3: {
    paddingBottom: 15,
  },
  card: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  bgWarning: {
    backgroundColor: '#ffc107',
  },
  cardBody: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  px3: {
    paddingHorizontal: 20,
  },
  py4: {
    paddingVertical: 25,
  },
  dFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  colorCard: {
    flex: 1,
  },
  colorCardHead: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  textWhite: {
    fontSize: 24,
    color: '#fff',
  },
  h5: {
    fontSize: 16,
  },
  cardIconIndicator: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dashboard;
