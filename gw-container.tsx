/* eslint-disable @nx/enforce-module-boundaries */
import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import tw from 'twrnc';
import { gwItemsConfig } from './gw-items-config';
import {CustomMultipleSelect} from '../../../../lb_presentation/src/index';
import { handleOnCategorySelect } from './gw-utils';
import GwCategoryDisplayBox from './gw-category-display';
import SocialSharingContainer from '../socialSharing/socialSharingContainer';

export const GwContainer: any = () => {
  // categories state initialisation
  const websiteUrl = 'https://example.com';

  const [selectedCategories, setSelectedCategories] = useState<any>(
    gwItemsConfig.map((ele) => {
      return {
        ...ele,
        key: ele?.categoryId,
        value: ele?.categoryDisplayName,
        checked: true,
      };
    })
  );

  const handleSelectAll = () => {
    setSelectedCategories(
      selectedCategories.map((ele: any) => {
        return { ...ele, checked: true };
      })
    );
  };


  return (
    <ScrollView style={tw`relative top-0 bg-[#131927]`}>
     <View style={{ position: 'absolute', zIndex: 1000, top: 10, right: '2%', }}>
  <CustomMultipleSelect
    data={selectedCategories}
    selectAll={handleSelectAll}
    onSelect={(item: any) => {
      handleOnCategorySelect(
        item,
        selectedCategories,
        setSelectedCategories
      );
    }}
  />
</View>

      
    
      <SocialSharingContainer url={websiteUrl}></SocialSharingContainer>
    <GwCategoryDisplayBox selectedCategories={selectedCategories} />
  </ScrollView>
  // );
)};
