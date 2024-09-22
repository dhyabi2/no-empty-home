### **React App Data Tracking Sheet**

| **Component Name**        | **File Path** | **State Variables** | **Data Source** | **Data Destination** | **Props Sent** | **Props Received** | **Linked Components** | **Functions Called** | **Events Listened** | **Lifecycle Methods Used** | **Display Method** | **Status** | **Completion (%)** | **Notes** |
|---------------------------|---------------|---------------------|-----------------|----------------------|----------------|--------------------|-----------------------|----------------------|---------------------|----------------------------|--------------------|------------|--------------------|-----------|
| **Index**                 | src/pages/Index.jsx | showConfetti, isLoading, isSideNavOpen, quickStats, recentActivity, upcomingEvents, leaderboard, nearbyShops, flashSales | useEffect, useAuth | Child components | user, quickStats, state, isLoading, nearbyShops, upcomingEvents, leaderboard, flashSales | None | Header, SideNav, Confetti, FloatingActionButton, RewardOverview, RewardRedemption, RewardGifting, RewardPlanner, FeaturedOffers, NearbyShops | handleCalculate, handleEarnReward | None | useEffect, useState | Renders main dashboard | Done | 100% | Main page, needs refactoring |
| **NearbyShops**           | src/components/NearbyShops.jsx | None | Props | None | None | isLoading, nearbyShops | None | None | None | None | Renders list of nearby shops | Done | 100% | Updated to handle undefined nearbyShops |
| **RewardOverview**        | src/components/RewardOverview.jsx | None | Props | None | None | isLoading, user, handleEarnReward | None | handleEarnReward | None | None | Displays reward overview | Done | 100% | Lazy loaded in Index |
| **RewardRedemption**      | src/components/RewardRedemption.jsx | None | None | None | None | None | None | None | None | None | Displays reward redemption options | Done | 100% | Lazy loaded in Index |
| **RewardGifting**         | src/components/RewardGifting.jsx | None | None | None | None | None | None | None | None | None | Displays reward gifting options | Done | 100% | Lazy loaded in Index |
| **RewardPlanner**         | src/components/RewardPlanner.jsx | None | None | None | None | None | None | None | None | None | Displays reward planning tools | Done | 100% | Lazy loaded in Index |
| **FeaturedOffers**        | src/components/FeaturedOffers.jsx | None | Props | None | None | isLoading | None | None | None | None | Displays featured offers | Done | 100% | Lazy loaded in Index |
| **BirthdayRewards**       | src/pages/BirthdayRewards.jsx | None | None | None | None | None | None | None | None | None | Displays birthday rewards | Not Done | 0% | Not implemented yet |
| **CustomerManagement**    | src/pages/CustomerManagement.jsx | None | None | None | None | None | None | None | None | None | Manages customer data | Not Done | 0% | Not implemented yet |
| **ExclusiveEvents**       | src/pages/ExclusiveEvents.jsx | None | None | None | None | None | None | None | None | None | Displays exclusive events | Not Done | 0% | Not implemented yet |
| **FavoriteShops**         | src/pages/FavoriteShops.jsx | None | None | None | None | None | None | None | None | None | Displays favorite shops | Not Done | 0% | Not implemented yet |
| **Favorites**             | src/pages/Favorites.jsx | None | None | None | None | None | None | None | None | None | Displays user favorites | Not Done | 0% | Not implemented yet |
| **Feedback**              | src/pages/Feedback.jsx | None | None | None | None | None | None | None | None | None | Handles user feedback | Not Done | 0% | Not implemented yet |
| **FlashSales**            | src/pages/FlashSales.jsx | None | None | None | None | None | None | None | None | None | Displays flash sales | Not Done | 0% | Not implemented yet |
| **HelpAndSupport**        | src/pages/HelpAndSupport.jsx | None | None | None | None | None | None | None | None | None | Provides help and support | Not Done | 0% | Not implemented yet |
| **HelpSupport**           | src/pages/HelpSupport.jsx | None | None | None | None | None | None | None | None | None | Provides help and support | Not Done | 0% | Duplicate of HelpAndSupport? |
| **LastMinuteDeals**       | src/pages/LastMinuteDeals.jsx | None | None | None | None | None | None | None | None | None | Displays last-minute deals | Not Done | 0% | Not implemented yet |
| **Leaderboard**           | src/pages/Leaderboard.jsx | None | None | None | None | None | None | None | None | None | Displays user leaderboard | Not Done | 0% | Not implemented yet |
| **NearbyOffers**          | src/pages/NearbyOffers.jsx | None | None | None | None | None | None | None | None | None | Displays nearby offers | Not Done | 0% | Not implemented yet |
| **Notifications**         | src/pages/Notifications.jsx | None | None | None | None | None | None | None | None | None | Handles user notifications | Not Done | 0% | Not implemented yet |
| **OfferDetail**           | src/pages/OfferDetail.jsx | None | None | None | None | None | None | None | None | None | Displays offer details | Not Done | 0% | Not implemented yet |
| **OfferListing**          | src/pages/OfferListing.jsx | None | None | None | None | None | None | None | None | None | Lists available offers | Not Done | 0% | Not implemented yet |
| **OfferManagement**       | src/pages/OfferManagement.jsx | None | None | None | None | None | None | None | None | None | Manages offers | Not Done | 0% | Not implemented yet |
| **PartnerRewards**        | src/pages/PartnerRewards.jsx | None | None | None | None | None | None | None | None | None | Displays partner rewards | Not Done | 0% | Not implemented yet |
| **PointBoosters**         | src/pages/PointBoosters.jsx | None | None | None | None | None | None | None | None | None | Displays point boosters | Not Done | 0% | Not implemented yet |
| **PointDonation**         | src/pages/PointDonation.jsx | None | None | None | None | None | None | None | None | None | Handles point donations | Not Done | 0% | Not implemented yet |
| **PointTransfer**         | src/pages/PointTransfer.jsx | None | None | None | None | None | None | None | None | None | Handles point transfers | Not Done | 0% | Not implemented yet |
| **PointsHistory**         | src/pages/PointsHistory.jsx | None | None | None | None | None | None | None | None | None | Displays points history | Not Done | 0% | Not implemented yet |
| **Profile**               | src/pages/Profile.jsx | None | None | None | None | None | None | None | None | None | Displays user profile | Not Done | 0% | Not implemented yet |
| **RedeemPoints**          | src/pages/RedeemPoints.jsx | None | None | None | None | None | None | None | None | None | Handles point redemption | Not Done | 0% | Not implemented yet |
| **RewardAndScanSystem**   | src/pages/RewardAndScanSystem.jsx | None | None | None | None | None | None | None | None | None | Manages reward and scan system | Not Done | 0% | Not implemented yet |
| **RewardAuctions**        | src/pages/RewardAuctions.jsx | None | None | None | None | None | None | None | None | None | Handles reward auctions | Done | 100% | Implemented |
| **RewardBundles**         | src/pages/RewardBundles.jsx | None | None | None | None | None | None | None | None | None | Displays reward bundles | Not Done | 0% | Not implemented yet |
| **RewardCategories**      | src/pages/RewardCategories.jsx | None | None | None | None | None | None | None | None | None | Displays reward categories | Not Done | 0% | Not implemented yet |
| **RewardCustomization**   | src/pages/RewardCustomization.jsx | None | None | None | None | None | None | None | None | None | Handles reward customization | Not Done | 0% | Not implemented yet |
| **RewardGiftingPage**     | src/pages/RewardGiftingPage.jsx | None | None | None | None | None | None | None | None | None | Handles reward gifting | Not Done | 0% | Not implemented yet |
| **RewardRatings**         | src/pages/RewardRatings.jsx | None | None | None | None | None | None | None | None | None | Displays reward ratings | Not Done | 0% | Not implemented yet |
| **RewardSharing**         | src/pages/RewardSharing.jsx | None | None | None | None | None | None | None | None | None | Handles reward sharing | Not Done | 0% | Not implemented yet |
| **RewardSubscription**    | src/pages/RewardSubscription.jsx | None | None | None | None | None | None | None | None | None | Manages reward subscriptions | Not Done | 0% | Not implemented yet |
| **ScanReceipt**           | src/pages/ScanReceipt.jsx | None | None | None | None | None | None | None | None | None | Handles receipt scanning | Not Done | 0% | Not implemented yet |
| **Search**                | src/pages/Search.jsx | None | None | None | None | None | None | None | None | None | Handles search functionality | Not Done | 0% | Not implemented yet |
| **ShopAuthentication**    | src/pages/ShopAuthentication.jsx | None | None | None | None | None | None | None | None | None | Handles shop authentication | Not Done | 0% | Not implemented yet |
| **ShopDashboard**         | src/pages/ShopDashboard.jsx | None | None | None | None | None | None | None | None | None | Displays shop dashboard | Not Done | 0% | Not implemented yet |
| **ShopListing**           | src/pages/ShopListing.jsx | None | None | None | None | None | None | None | None | None | Lists available shops | Not Done | 0% | Not implemented yet |
| **ShopProfile**           | src/pages/ShopProfile.jsx | None | None | None | None | None | None | None | None | None | Displays shop profile | Not Done | 0% | Not implemented yet |
| **ShopRegistration**      | src/pages/ShopRegistration.jsx | None | None | None | None | None | None | None | None | None | Handles shop registration | Not Done | 0% | Not implemented yet |
| **ShopSettings**          | src/pages/ShopSettings.jsx | None | None | None | None | None | None | None | None | None | Manages shop settings | Not Done | 0% | Not implemented yet |
| **SurpriseRewards**       | src/pages/SurpriseRewards.jsx | None | None | None | None | None | None | None | None | None | Displays surprise rewards | Not Done | 0% | Not implemented yet |
| **Wishlist**              | src/pages/Wishlist.jsx | None | None | None | None | None | None | None | None | None | Displays user wishlist | Not Done | 0% | Not implemented yet |
| **WishlistSharing**       | src/pages/WishlistSharing.jsx | None | None | None | None | None | None | None | None | None | Handles wishlist sharing | Not Done | 0% | Not implemented yet |
| **RewardShowcase**        | src/pages/RewardShowcase.jsx | None | None | None | None | None | None | None | None | None | Displays reward showcase | Done | 100% | Implemented |
