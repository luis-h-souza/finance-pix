import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Container for the entire screen
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA", // Light background for the screen
    paddingHorizontal: 16, // Reduced padding for better balance
  },
  // Content container for FlatList
  scrollContainer: {
    paddingBottom: 16, // Space at the bottom for scrolling
    paddingHorizontal: 20
  },
  // Header section with title
  bodyTitle: {
    width: "100%", // Full width for consistency
    marginVertical: 16, // Balanced vertical spacing
    paddingLeft: 8, // Left padding for alignment
  },
  // Horizontal rule
  hr: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(173, 181, 189, 0.3)", // Subtle separator
    marginVertical: 16, // Reduced spacing for tighter layout
  },
  // Title text (e.g., "Histórico de transações")
  title: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32,
    letterSpacing: 0.5, // Fixed typo and adjusted for readability
    color: "#212529", // Dark text for contrast
  },
  // Transaction card container
  card: {
    width: "100%",
    padding: 16,
    marginVertical: 8, // Space between cards
    backgroundColor: "#FFFFFF", // White background for cards
    borderRadius: 12, // Rounded corners for modern look
    shadowColor: "#000", // Subtle shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
  },
  // Text for transaction details
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.5,
    color: "#212529", // Dark text for readability
    marginBottom: 4, // Space between text lines
  },
  pagador: {
    color: "#Ff0000",
  },
  recebedor:{
    color: "#228B22",
  },
  // Empty state text
  empty: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666", // Gray for less emphasis
    textAlign: "center",
    marginTop: 20,
  },
  // Error state text
  error: {
    fontSize: 16,
    lineHeight: 24,
    color: "#D32F2F", // Red for errors
    textAlign: "center",
    marginTop: 20,
  },
});
