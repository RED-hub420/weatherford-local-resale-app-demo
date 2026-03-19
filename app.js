const STORAGE_KEY = "wlrt-app-demo-v4-customerfirst";
const APP_NAME = "Weatherford Local Resale & Thrift";
const STORE_ADDRESS = "1812 Fort Worth Hwy, Weatherford, TX 76087";
const MESSENGER_URL = "https://www.facebook.com/profile.php?id=61587956354387";

const categories = [
  "Fresh Finds",
  "Furniture",
  "Home Decor",
  "Clothing",
  "Collectibles",
  "Toys & Games",
  "Housewares",
  "Electronics"
];

const conditionOptions = ["New", "Like New", "Very Good", "Good", "Fair"];
const fulfillmentOptions = ["Pickup", "Ship", "Pickup or Ship"];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function nextId(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  }).format(Number(value || 0));
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function defaultInventory() {
  return [
    {
      id: "item-helmet",
      name: "Cowboys Collectible Helmet",
      category: "Collectibles",
      price: 44,
      condition: "Good",
      qty: 1,
      fulfillment: "Pickup or Ship",
      allowOffer: true,
      featured: true,
      isNew: true,
      status: "Active",
      image: "assets/images/product-cowboys-helmet.jpg",
      description: "Vintage-style Cowboys helmet display piece pulled from the current shop floor. Great fit for sports fans, man cave decor, or resale collectors."
    },
    {
      id: "item-hp",
      name: "Harry Potter Box Set",
      category: "Collectibles",
      price: 38,
      condition: "Very Good",
      qty: 1,
      fulfillment: "Pickup or Ship",
      allowOffer: false,
      featured: true,
      isNew: true,
      status: "Active",
      image: "assets/images/product-harry-potter.jpg",
      description: "Collector-style Harry Potter media set presented as a one-off shelf item. Perfect example of the rotating pop-culture inventory the store can list quickly online."
    },
    {
      id: "item-snoopy",
      name: "Snoopy Ceramic Ashtray",
      category: "Home Decor",
      price: 22,
      condition: "Good",
      qty: 1,
      fulfillment: "Pickup or Ship",
      allowOffer: true,
      featured: false,
      isNew: true,
      status: "Active",
      image: "assets/images/product-snoopy.jpg",
      description: "Fun vintage Snoopy piece with strong impulse-buy energy. Great example of the quirky, treasure-hunt inventory that makes shoppers keep checking back."
    },
    {
      id: "item-guitar",
      name: "Guitar Hero Controller Set",
      category: "Electronics",
      price: 64,
      condition: "Good",
      qty: 1,
      fulfillment: "Pickup or Ship",
      allowOffer: true,
      featured: true,
      isNew: false,
      status: "Active",
      image: "assets/images/product-guitar-hero.jpg",
      description: "Pair of game controllers shown as one sellable bundle. Strong demo item for shoppers searching gaming gear, party items, or nostalgic electronics."
    },
    {
      id: "item-tractor",
      name: "John Deere Toy Tractor",
      category: "Toys & Games",
      price: 16,
      condition: "Very Good",
      qty: 2,
      fulfillment: "Pickup or Ship",
      allowOffer: false,
      featured: false,
      isNew: true,
      status: "Active",
      image: "assets/images/product-john-deere.jpg",
      description: "Farm and tractor pieces move well for gifting and collectors. This shows how the app can handle smaller quantity-based items too."
    },
    {
      id: "item-camp",
      name: "Outdoor Camp Bundle",
      category: "Housewares",
      price: 89,
      condition: "Good",
      qty: 1,
      fulfillment: "Pickup",
      allowOffer: true,
      featured: true,
      isNew: false,
      status: "Active",
      image: "assets/images/product-camping.jpg",
      description: "Example bundle listing for larger outdoor and seasonal inventory. Great for visualizing pickup-only items with bigger ticket value."
    },
    {
      id: "item-glassware",
      name: "Vintage Glassware Set",
      category: "Housewares",
      price: 28,
      condition: "Very Good",
      qty: 1,
      fulfillment: "Pickup or Ship",
      allowOffer: false,
      featured: false,
      isNew: true,
      status: "Active",
      image: "assets/images/product-glassware.jpg",
      description: "Clean, giftable glassware listing to show how housewares can be merchandised with sharp photos and clear fulfillment options."
    },
    {
      id: "item-table",
      name: "Accent Side Table",
      category: "Furniture",
      price: 74,
      condition: "Good",
      qty: 1,
      fulfillment: "Pickup",
      allowOffer: true,
      featured: false,
      isNew: false,
      status: "Active",
      image: "assets/images/product-side-table.jpg",
      description: "Furniture piece included to show how larger in-store inventory could be listed online with pickup-first checkout and make-offer flexibility."
    },
    {
      id: "item-charlie",
      name: "Charlie Brown Display Figure",
      category: "Collectibles",
      price: 18,
      condition: "Good",
      qty: 1,
      fulfillment: "Pickup or Ship",
      allowOffer: false,
      featured: false,
      isNew: true,
      status: "Active",
      image: "assets/images/product-charlie-brown.jpg",
      description: "Another fun one-off collectible. This kind of item helps the app feel like a real treasure-hunt storefront instead of a boring generic catalog."
    },
    {
      id: "item-jacket",
      name: "Retro Varsity Jacket",
      category: "Clothing",
      price: 26,
      condition: "Good",
      qty: 1,
      fulfillment: "Pickup or Ship",
      allowOffer: true,
      featured: false,
      isNew: false,
      status: "Active",
      image: "assets/images/placeholder-clothing.jpg",
      description: "Sample apparel listing to show how clothing could be blended into the same resale catalog without making the app feel cluttered."
    },
    {
      id: "item-decor",
      name: "Rustic Wall Decor Bundle",
      category: "Home Decor",
      price: 31,
      condition: "Very Good",
      qty: 1,
      fulfillment: "Pickup or Ship",
      allowOffer: false,
      featured: false,
      isNew: false,
      status: "Active",
      image: "assets/images/placeholder-decor.jpg",
      description: "Bundled decor inventory gives Seth a way to move related items together and keep online listings fresh without a ton of extra work."
    },
    {
      id: "item-chair",
      name: "Painted Accent Chair",
      category: "Furniture",
      price: 58,
      condition: "Good",
      qty: 1,
      fulfillment: "Pickup",
      allowOffer: true,
      featured: false,
      isNew: true,
      status: "Active",
      image: "assets/images/placeholder-furniture.jpg",
      description: "Sample furniture card for visual balance. Works well to show pickup workflow, one-of-one inventory tracking, and quick online merchandising."
    },
    {
      id: "item-kitchen",
      name: "Kitchen Starter Bundle",
      category: "Housewares",
      price: 24,
      condition: "Good",
      qty: 1,
      fulfillment: "Pickup or Ship",
      allowOffer: false,
      featured: false,
      isNew: false,
      status: "Active",
      image: "assets/images/placeholder-housewares.jpg",
      description: "Simple household bundle to visualize budget-friendly online listings and impulse checkout from local shoppers."
    }
  ];
}

function defaultData() {
  const inventory = defaultInventory();
  return {
    inventory,
    cart: [],
    wishlist: ["item-helmet", "item-guitar", "item-table"],
    orders: [
      {
        id: "WLRT-1042",
        itemIds: ["item-snoopy"],
        customerName: "Taylor Brooks",
        email: "taylor@example.com",
        total: 22,
        status: "Ready for pickup",
        fulfillment: "Pickup",
        date: "2026-03-15",
        note: "Pickup window selected for tomorrow morning."
      },
      {
        id: "WLRT-1038",
        itemIds: ["item-jacket"],
        customerName: "Taylor Brooks",
        email: "taylor@example.com",
        total: 26,
        status: "Shipped",
        fulfillment: "Ship",
        date: "2026-03-13",
        note: "Tracking sent to customer."
      },
      {
        id: "WLRT-1031",
        itemIds: ["item-charlie"],
        customerName: "Taylor Brooks",
        email: "taylor@example.com",
        total: 18,
        status: "Delivered",
        fulfillment: "Ship",
        date: "2026-03-09",
        note: "Delivered successfully."
      }
    ],
    customers: [
      {
        id: "cust-taylor",
        name: "Taylor Brooks",
        email: "taylor@example.com",
        orders: 3,
        lifetimeValue: 66,
        favoriteCategory: "Collectibles",
        tier: "Repeat shopper"
      },
      {
        id: "cust-jordan",
        name: "Jordan King",
        email: "jordan@example.com",
        orders: 1,
        lifetimeValue: 89,
        favoriteCategory: "Housewares",
        tier: "First order"
      },
      {
        id: "cust-maria",
        name: "Maria Carter",
        email: "maria@example.com",
        orders: 4,
        lifetimeValue: 154,
        favoriteCategory: "Furniture",
        tier: "VIP browser"
      }
    ],
    payments: [
      {
        id: "pay-2001",
        orderId: "WLRT-1042",
        amount: 22,
        method: "Apple Pay",
        status: "Captured",
        date: "2026-03-15"
      },
      {
        id: "pay-1998",
        orderId: "WLRT-1038",
        amount: 26,
        method: "Visa",
        status: "Captured",
        date: "2026-03-13"
      },
      {
        id: "pay-1988",
        orderId: "WLRT-1031",
        amount: 18,
        method: "PayPal",
        status: "Captured",
        date: "2026-03-09"
      }
    ],
    messages: [
      {
        id: nextId("msg"),
        from: "Store Team",
        audience: "customer",
        subject: "Pickup ready",
        body: "Your Snoopy ashtray order is ready for pickup at the front counter.",
        time: "10 minutes ago"
      },
      {
        id: nextId("msg"),
        from: "Store Team",
        audience: "customer",
        subject: "Offer update",
        body: "We review offers quickly. If you see something you like, send one over and we'll take a look.",
        time: "Yesterday"
      },
      {
        id: nextId("msg"),
        from: "Taylor Brooks",
        audience: "admin",
        subject: "Question about pickup",
        body: "Can I grab my order after 5 PM tomorrow?",
        time: "14 minutes ago"
      },
      {
        id: nextId("msg"),
        from: "Jordan King",
        audience: "admin",
        subject: "Interested in camp bundle",
        body: "Is the outdoor bundle still available for pickup this weekend?",
        time: "2 hours ago"
      }
    ],
    customerProfile: {
      name: "Taylor Brooks",
      email: "taylor@example.com",
      phone: "(817) 555-0142",
      addresses: [
        "112 Oak Creek Dr, Weatherford, TX 76087",
        "Pickup contact on file at store front"
      ],
      savedPayments: ["Visa •••• 4242", "PayPal", "Apple Pay"],
      memberSince: "January 2026"
    },
    settings: {
      pickupEnabled: true,
      shippingEnabled: true,
      offersEnabled: true,
      featuredHomeCount: 6,
      messengerUrl: MESSENGER_URL
    }
  };
}

let data = loadData();
let ui = {
  portal: null,
  customerView: "home",
  adminView: "dashboard",
  shopSearch: "",
  shopCategory: "Fresh Finds",
  inventorySearch: "",
  inventoryFilter: "all",
  cartOpen: false,
  modal: null,
  inventoryForm: emptyInventoryForm(),
  editingItemId: null,
  checkoutForm: {
    name: data.customerProfile.name,
    email: data.customerProfile.email,
    phone: data.customerProfile.phone,
    fulfillment: "Pickup",
    paymentMethod: "Card",
    notes: ""
  }
};

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultData();
    const parsed = JSON.parse(raw);
    return {
      ...defaultData(),
      ...parsed,
      inventory: parsed.inventory || defaultInventory(),
      cart: parsed.cart || [],
      wishlist: parsed.wishlist || [],
      orders: parsed.orders || [],
      customers: parsed.customers || [],
      payments: parsed.payments || [],
      messages: parsed.messages || [],
      customerProfile: parsed.customerProfile || defaultData().customerProfile,
      settings: parsed.settings || defaultData().settings
    };
  } catch (error) {
    return defaultData();
  }
}

function persistData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function resetDemo() {
  data = defaultData();
  ui = {
    portal: null,
    customerView: "home",
    adminView: "dashboard",
    shopSearch: "",
    shopCategory: "Fresh Finds",
    inventorySearch: "",
    inventoryFilter: "all",
    cartOpen: false,
    modal: null,
    inventoryForm: emptyInventoryForm(),
    editingItemId: null,
    checkoutForm: {
      name: data.customerProfile.name,
      email: data.customerProfile.email,
      phone: data.customerProfile.phone,
      fulfillment: "Pickup",
      paymentMethod: "Card",
      notes: ""
    }
  };
  persistData();
  updateHash();
  toast("Demo reset", "Everything has been restored to the original sales demo data.");
  render();
}

function emptyInventoryForm() {
  return {
    name: "",
    category: "Furniture",
    price: "",
    condition: "Good",
    qty: 1,
    fulfillment: "Pickup or Ship",
    allowOffer: true,
    featured: false,
    isNew: true,
    status: "Active",
    image: "assets/images/placeholder-furniture.jpg",
    description: ""
  };
}

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash) return null;
  const [portal, view] = hash.split("/");
  if (!portal) return null;
  return { portal, view };
}

function applyRoute() {
  const route = getRouteFromHash();
  if (!route) return;
  if (route.portal === "customer") {
    ui.portal = "customer";
    if (["home", "shop", "orders", "messages", "account", "checkout"].includes(route.view)) {
      ui.customerView = route.view;
    }
  }
  if (route.portal === "admin") {
    ui.portal = "admin";
    if (["dashboard", "inventory", "orders", "customers", "payments", "analytics", "opportunity", "messages", "settings"].includes(route.view)) {
      ui.adminView = route.view;
    }
  }
}

function updateHash() {
  if (!ui.portal) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
    return;
  }
  const view = ui.portal === "customer" ? ui.customerView : ui.adminView;
  const newHash = `#${ui.portal}/${view}`;
  if (window.location.hash !== newHash) {
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}${newHash}`);
  }
}

function getActiveInventory() {
  return data.inventory.filter((item) => item.status === "Active" && Number(item.qty) > 0);
}

function getFeaturedInventory() {
  return getActiveInventory().filter((item) => item.featured).slice(0, Number(data.settings.featuredHomeCount || 6));
}

function getNewArrivals() {
  return getActiveInventory().filter((item) => item.isNew).slice(0, 6);
}

function getFilteredInventory() {
  const search = ui.shopSearch.trim().toLowerCase();
  return getActiveInventory().filter((item) => {
    const matchesCategory = ui.shopCategory === "Fresh Finds" ? true : item.category === ui.shopCategory;
    const matchesSearch = !search
      ? true
      : [item.name, item.category, item.description]
          .join(" ")
          .toLowerCase()
          .includes(search);
    return matchesCategory && matchesSearch;
  });
}

function getInventoryById(id) {
  return data.inventory.find((item) => item.id === id);
}

function cartLines() {
  return data.cart
    .map((line, index) => {
      const item = getInventoryById(line.itemId);
      if (!item) return null;
      const price = line.priceOverride ?? item.price;
      return {
        index,
        item,
        qty: line.qty || 1,
        price,
        subtotal: price * (line.qty || 1),
        note: line.note || ""
      };
    })
    .filter(Boolean);
}

function cartCount() {
  return cartLines().reduce((sum, line) => sum + line.qty, 0);
}

function cartTotal() {
  return cartLines().reduce((sum, line) => sum + line.subtotal, 0);
}

function addToCart(itemId, options = {}) {
  const item = getInventoryById(itemId);
  if (!item || item.status !== "Active" || Number(item.qty) <= 0) {
    toast("Item unavailable", "That item is currently not available.");
    return;
  }
  const existingIndex = data.cart.findIndex(
    (line) => line.itemId === itemId && (line.priceOverride ?? null) === (options.priceOverride ?? null)
  );
  if (existingIndex >= 0) {
    if (data.cart[existingIndex].qty < item.qty) {
      data.cart[existingIndex].qty += 1;
    }
  } else {
    data.cart.push({
      itemId,
      qty: 1,
      priceOverride: options.priceOverride,
      note: options.note || ""
    });
  }
  persistData();
  ui.cartOpen = true;
  toast("Added to cart", `${item.name} is ready for checkout.`);
  render();
}

function removeFromCart(index) {
  data.cart.splice(index, 1);
  persistData();
  render();
}

function toggleWishlist(itemId) {
  const index = data.wishlist.indexOf(itemId);
  const item = getInventoryById(itemId);
  if (index >= 0) {
    data.wishlist.splice(index, 1);
    toast("Saved item removed", `${item?.name || "Item"} was removed from favorites.`);
  } else {
    data.wishlist.push(itemId);
    toast("Saved item added", `${item?.name || "Item"} was added to favorites.`);
  }
  persistData();
  render();
}

function createOrderFromCart() {
  const lines = cartLines();
  if (!lines.length) return;
  const total = cartTotal();
  const orderId = `WLRT-${Math.floor(1000 + Math.random() * 8999)}`;
  const status = ui.checkoutForm.fulfillment === "Ship" ? "Paid - preparing shipment" : "Paid - awaiting pickup";
  const itemIds = lines.map((line) => line.item.id);
  data.orders.unshift({
    id: orderId,
    itemIds,
    customerName: ui.checkoutForm.name || data.customerProfile.name,
    email: ui.checkoutForm.email || data.customerProfile.email,
    total,
    status,
    fulfillment: ui.checkoutForm.fulfillment,
    date: new Date().toISOString().slice(0, 10),
    note: ui.checkoutForm.notes || "Demo checkout created from customer portal."
  });
  data.payments.unshift({
    id: nextId("pay"),
    orderId,
    amount: total,
    method: ui.checkoutForm.paymentMethod,
    status: "Captured",
    date: new Date().toISOString().slice(0, 10)
  });
  lines.forEach((line) => {
    const item = getInventoryById(line.item.id);
    if (!item) return;
    item.qty = Math.max(0, Number(item.qty) - line.qty);
    if (item.qty === 0) item.status = "Sold";
  });
  const existingCustomer = data.customers.find((c) => c.email === (ui.checkoutForm.email || data.customerProfile.email));
  if (existingCustomer) {
    existingCustomer.orders += 1;
    existingCustomer.lifetimeValue += total;
  }
  data.messages.unshift({
    id: nextId("msg"),
    from: "Store Team",
    audience: "customer",
    subject: `Order ${orderId} confirmed`,
    body: `${ui.checkoutForm.fulfillment === "Ship" ? "We'll pack this up and send tracking soon." : "Your order is confirmed and will be ready at the front counter."}`,
    time: "Just now"
  });
  data.messages.unshift({
    id: nextId("msg"),
    from: ui.checkoutForm.name || data.customerProfile.name,
    audience: "admin",
    subject: `New order ${orderId}`,
    body: `New ${ui.checkoutForm.fulfillment.toLowerCase()} order placed through the demo checkout.`,
    time: "Just now"
  });
  data.cart = [];
  persistData();
  ui.cartOpen = false;
  ui.modal = null;
  ui.customerView = "orders";
  updateHash();
  toast("Order placed", `${orderId} was created and payment was captured in demo mode.`);
  render();
}

function submitOffer(itemId, amount) {
  const item = getInventoryById(itemId);
  if (!item) return;
  const offer = Number(amount);
  if (!offer || offer <= 0) {
    toast("Offer not sent", "Enter a valid offer amount first.");
    return;
  }
  if (offer >= item.price * 0.8) {
    addToCart(itemId, {
      priceOverride: offer,
      note: `Accepted offer price on ${item.name}`
    });
    data.messages.unshift({
      id: nextId("msg"),
      from: "Store Team",
      audience: "customer",
      subject: `Offer accepted: ${item.name}`,
      body: `Good news — your ${currency(offer)} offer was accepted. We've added it to your cart so you can check out now.`,
      time: "Just now"
    });
    data.messages.unshift({
      id: nextId("msg"),
      from: data.customerProfile.name,
      audience: "admin",
      subject: `Accepted offer on ${item.name}`,
      body: `Demo offer accepted automatically at ${currency(offer)}.`,
      time: "Just now"
    });
    persistData();
    ui.modal = null;
    toast("Offer accepted", `${item.name} was added to the cart at ${currency(offer)}.`);
    render();
    return;
  }
  data.messages.unshift({
    id: nextId("msg"),
    from: data.customerProfile.name,
    audience: "admin",
    subject: `Offer submitted on ${item.name}`,
    body: `${data.customerProfile.name} submitted a ${currency(offer)} offer.`,
    time: "Just now"
  });
  data.messages.unshift({
    id: nextId("msg"),
    from: "Store Team",
    audience: "customer",
    subject: `Offer received: ${item.name}`,
    body: `We received your ${currency(offer)} offer on ${item.name}. Seth can review it from the admin portal.`,
    time: "Just now"
  });
  persistData();
  ui.modal = null;
  toast("Offer sent", `Your offer on ${item.name} has been sent for review.`);
  render();
}

function saveInventoryItem() {
  const form = ui.inventoryForm;
  if (!form.name.trim() || !form.price || !form.image.trim()) {
    toast("Missing info", "Item name, price, and image path are required for the demo inventory form.");
    return;
  }
  const payload = {
    id: ui.editingItemId || nextId("item"),
    name: form.name.trim(),
    category: form.category,
    price: Number(form.price),
    condition: form.condition,
    qty: Number(form.qty),
    fulfillment: form.fulfillment,
    allowOffer: Boolean(form.allowOffer),
    featured: Boolean(form.featured),
    isNew: Boolean(form.isNew),
    status: form.status,
    image: form.image.trim(),
    description: form.description.trim() || "Demo inventory item added from the admin portal."
  };
  if (ui.editingItemId) {
    const index = data.inventory.findIndex((item) => item.id === ui.editingItemId);
    if (index >= 0) data.inventory[index] = payload;
    toast("Inventory updated", `${payload.name} was updated in the admin portal.`);
  } else {
    data.inventory.unshift(payload);
    toast("Inventory added", `${payload.name} was added to the demo catalog.`);
  }
  persistData();
  ui.inventoryForm = emptyInventoryForm();
  ui.editingItemId = null;
  render();
}

function populateInventoryForm(itemId) {
  const item = getInventoryById(itemId);
  if (!item) return;
  ui.inventoryForm = {
    name: item.name,
    category: item.category,
    price: item.price,
    condition: item.condition,
    qty: item.qty,
    fulfillment: item.fulfillment,
    allowOffer: item.allowOffer,
    featured: item.featured,
    isNew: item.isNew,
    status: item.status,
    image: item.image,
    description: item.description
  };
  ui.editingItemId = itemId;
  render();
}

function duplicateInventoryItem(itemId) {
  const item = getInventoryById(itemId);
  if (!item) return;
  const copy = clone(item);
  copy.id = nextId("item");
  copy.name = `${item.name} Copy`;
  data.inventory.unshift(copy);
  persistData();
  toast("Item duplicated", `${item.name} was duplicated for fast catalog building.`);
  render();
}

function setOrderStatus(orderId, status) {
  const order = data.orders.find((entry) => entry.id === orderId);
  if (!order) return;
  order.status = status;
  persistData();
  toast("Order updated", `${orderId} is now marked ${status}.`);
  render();
}

function quickReply(messageId) {
  const message = data.messages.find((entry) => entry.id === messageId);
  if (!message) return;
  data.messages.unshift({
    id: nextId("msg"),
    from: "Store Team",
    audience: "customer",
    subject: `Re: ${message.subject}`,
    body: "Absolutely — thanks for reaching out. Seth can confirm details and keep the order moving.",
    time: "Just now"
  });
  persistData();
  toast("Reply sent", "A quick reply was added to the customer message center.");
  render();
}

function inventoryStats() {
  const active = getActiveInventory();
  const byCategory = categories
    .filter((category) => category !== "Fresh Finds")
    .map((category) => ({
      name: category,
      count: active.filter((item) => item.category === category).length
    }))
    .filter((entry) => entry.count > 0);
  const totalValue = active.reduce((sum, item) => sum + Number(item.price) * Number(item.qty), 0);
  return { activeCount: active.length, totalValue, byCategory };
}

function todaySnapshot() {
  const today = new Date().toISOString().slice(0, 10);
  const ordersToday = data.orders.filter((order) => order.date === today);
  const paymentsToday = data.payments.filter((payment) => payment.date === today);
  const openOrders = data.orders.filter((order) => !order.status.includes("Delivered")).length;
  const pickupReady = data.orders.filter((order) => order.status.toLowerCase().includes("pickup")).length;
  const offerThreads = data.messages.filter((entry) => entry.audience === "admin" && entry.subject.toLowerCase().includes("offer")).length;
  const recentListings = data.inventory.filter((item) => item.isNew && item.status === "Active").length;
  const customerSaves = data.wishlist.length;
  const hotItems = getActiveInventory().filter((item) => item.featured || item.isNew).slice(0, 4);
  return {
    today,
    ordersToday,
    paymentsToday,
    openOrders,
    pickupReady,
    offerThreads,
    recentListings,
    customerSaves,
    grossToday: paymentsToday.reduce((sum, payment) => sum + Number(payment.amount), 0),
    hotItems,
  };
}

function buildRecentActivity() {
  const paymentEntries = data.payments.slice(0, 3).map((payment) => ({
    title: `${payment.orderId} payment captured`,
    meta: `${currency(payment.amount)} • ${payment.method}`,
    type: "Payment"
  }));
  const orderEntries = data.orders.slice(0, 3).map((order) => ({
    title: `${order.id} ${order.status.toLowerCase()}`,
    meta: `${order.customerName} • ${order.fulfillment}`,
    type: "Order"
  }));
  const messageEntries = data.messages.filter((entry) => entry.audience === "admin").slice(0, 2).map((message) => ({
    title: message.subject,
    meta: `${message.from} • ${message.time}`,
    type: "Message"
  }));
  return [...paymentEntries, ...orderEntries, ...messageEntries].slice(0, 7);
}

function toast(title, body) {
  const root = document.getElementById("toast-root");
  if (!root) return;
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<strong>${escapeHtml(title)}</strong><div>${escapeHtml(body)}</div>`;
  root.appendChild(el);
  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateY(8px)";
    setTimeout(() => el.remove(), 240);
  }, 2600);
}

function renderTopbar() {
  const cartBadge = cartCount() ? `<span class="badge gold">${cartCount()} in cart</span>` : "";
  return `
    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          <img class="brand-logo" src="assets/images/logo.png" alt="${APP_NAME} logo" />
          <div class="brand-copy">
            <p class="eyebrow">Interactive web app demo</p>
            <p class="brand-title">${APP_NAME}</p>
            <p class="brand-subtitle">Customer portal + admin operating system demo for Seth</p>
          </div>
        </div>
        <div class="topbar-actions">
          <div class="portal-toggle">
            <button class="tab-chip ${ui.portal === "customer" ? "active" : ""}" data-action="switch-portal" data-portal="customer">Customer</button>
            <button class="tab-chip ${ui.portal === "admin" ? "active" : ""}" data-action="switch-portal" data-portal="admin">Admin</button>
          </div>
          ${ui.portal === "customer" ? `<button class="btn btn-secondary btn-sm" data-action="open-cart">Cart ${cartBadge}</button>` : ""}
          <button class="btn btn-outline btn-sm" data-action="reset-demo">Reset Demo</button>
        </div>
      </div>
    </header>
  `;
}

function renderLogin() {
  const stats = inventoryStats();
  const today = todaySnapshot();
  return `
    <section class="login-shell">
      <div class="hero-grid hero-grid-strong">
        <article class="hero-card hero-card-photo">
          <div class="hero-content hero-content-wide">
            <p class="eyebrow" style="color: rgba(255,255,255,.84)">Play it like a real business app</p>
            <h1>Show Seth a resale app that feels like it could run the store — not just sit there looking pretty.</h1>
            <p>This demo is built to sell the real idea: shoppers can browse live-looking inventory, save favorites, make offers, pay online, and choose pickup or shipping. Seth can jump into the admin side and actually feel how inventory, orders, payments, messages, and new listings could work in one operating system.</p>
            <div class="hero-actions">
              <button class="btn btn-primary" data-action="enter-portal" data-portal="customer">Enter Customer Demo</button>
              <button class="btn btn-outline" data-action="enter-portal" data-portal="admin">Enter Admin Demo</button>
            </div>
            <div class="hero-stat-grid hero-stat-grid-strong">
              <div class="mini-stat"><strong>${stats.activeCount}</strong><span>active sample listings</span></div>
              <div class="mini-stat"><strong>${currency(stats.totalValue)}</strong><span>inventory value shown</span></div>
              <div class="mini-stat"><strong>${currency(today.grossToday)}</strong><span>payments captured today</span></div>
              <div class="mini-stat"><strong>${today.customerSaves}</strong><span>saved-item signals in motion</span></div>
            </div>
          </div>
        </article>
        <div class="side-stack">
          <article class="auth-card">
            <p class="eyebrow">How to pitch it</p>
            <h2 style="margin:8px 0 0; font-size:2rem; line-height:1.02; letter-spacing:-.04em;">Use the customer side to hook him. Use the admin side to close him.</h2>
            <p class="supporting" style="margin-top:14px;">Customer portal shows the buying experience. Admin portal shows the money, control, and operational upside. Together, they make the app feel like something Seth could actually use.</p>
            <div class="auth-grid">
              <div class="auth-option">
                <div>
                  <h3>Customer portal</h3>
                  <p>Browse new arrivals, search categories, save items, submit offers, and complete a smooth checkout.</p>
                </div>
                <button class="btn btn-primary" data-action="enter-portal" data-portal="customer">Open customer experience</button>
              </div>
              <div class="auth-option">
                <div>
                  <h3>Admin portal</h3>
                  <p>Add inventory, feature items, manage orders, capture payments, answer offers, and see the opportunity screen.</p>
                </div>
                <button class="btn btn-secondary" data-action="enter-portal" data-portal="admin">Open admin experience</button>
              </div>
            </div>
          </article>
          <article class="card">
            <div class="section-head">
              <div>
                <p class="eyebrow">What makes this hit harder</p>
                <h2>This feels like a store, not a school project.</h2>
              </div>
            </div>
            <div class="quick-grid quick-grid-tight">
              <div class="small-panel"><strong>Real inventory vibe</strong><span>Mixed thrift items, collectibles, housewares, clothing, furniture, and local pickup logic.</span></div>
              <div class="small-panel"><strong>Live-today story</strong><span>Dashboard metrics, recent activity, hot listings, and payments make the admin side feel alive.</span></div>
              <div class="small-panel"><strong>Conversion angle</strong><span>Buy now, make offer, and checkout screens show how this app helps stop losing easy sales.</span></div>
            </div>
          </article>
        </div>
      </div>
      <p class="footer-note">Demo mode only. Data is simulated and stored locally in this browser so Seth can click around, feel the workflow, and see the business upside.</p>
    </section>
  `;
}

function renderPortalHeader() {
  if (ui.portal === "customer") {
    return `
      <div class="portal-header">
        <div class="portal-header-copy">
          <p class="eyebrow">Shop online, pick up local</p>
          <h1>Find the good stuff before somebody else grabs it.</h1>
          <p>Browse what is in the store right now, save favorites, send an offer on one-of-a-kind pieces, and check out for pickup or shipping without chasing inventory through messages.</p>
        </div>
        <div class="stack-actions">
          <button class="btn btn-primary" data-action="set-customer-view" data-view="shop">Shop Inventory</button>
          <a class="btn btn-secondary" href="${MESSENGER_URL}" target="_blank" rel="noreferrer">Message Store</a>
          <a class="btn btn-outline" href="https://maps.google.com/?q=${encodeURIComponent(STORE_ADDRESS)}" target="_blank" rel="noreferrer">Get Directions</a>
        </div>
      </div>
    `;
  }
  return `
    <div class="portal-header">
      <div class="portal-header-copy">
        <p class="eyebrow">Admin portal demo</p>
        <h1>Seth’s control center for inventory, online sales, payments, and customer activity.</h1>
        <p>This side sells the real value. It is built to help a resale store list inventory fast, close online orders without back-and-forth, stay organized, and keep up with the constant rotation of one-of-a-kind items.</p>
      </div>
      <div class="stack-actions">
        <button class="btn btn-secondary" data-action="set-admin-view" data-view="inventory">Add Inventory</button>
        <button class="btn btn-outline" data-action="set-admin-view" data-view="opportunity">View Opportunity</button>
      </div>
    </div>
  `;
}

function renderCustomerNav() {
  const items = [
    ["home", "Home", "New arrivals, pickup, favorites"],
    ["shop", "Shop", "Search current inventory"],
    ["orders", "Orders", "Pickup and shipping updates"],
    ["messages", "Messages", "Store questions and offers"],
    ["account", "Account", "Profile and saved items"]
  ];
  return `
    <div class="portal-nav">
      ${items
        .map(
          ([view, label, sub]) => `
            <button class="nav-card ${ui.customerView === view ? "active" : ""}" data-action="set-customer-view" data-view="${view}">
              ${label}
              <small>${sub}</small>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderAdminNav() {
  const items = [
    ["dashboard", "Dashboard", "Snapshot of the business"],
    ["inventory", "Inventory", "Add and edit listings"],
    ["orders", "Orders", "Track fulfillment"],
    ["customers", "Customers", "History and value"],
    ["payments", "Payments", "Money in"],
    ["analytics", "Analytics", "See what is moving"],
    ["opportunity", "Opportunity", "Why this makes money"],
    ["messages", "Messages", "Questions and offers"],
    ["settings", "Settings", "Store preferences"]
  ];
  return `
    <div class="portal-nav">
      ${items
        .map(
          ([view, label, sub]) => `
            <button class="nav-card ${ui.adminView === view ? "active" : ""}" data-action="set-admin-view" data-view="${view}">
              ${label}
              <small>${sub}</small>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderKpis() {
  const stats = inventoryStats();
  const ordersToday = data.orders.filter((order) => order.date === new Date().toISOString().slice(0, 10)).length;
  return `
    <div class="kpi-grid">
      <div class="kpi-card"><h3>Active Listings</h3><strong>${stats.activeCount}</strong><span>Visible in the current storefront demo</span></div>
      <div class="kpi-card"><h3>Inventory Value</h3><strong>${currency(stats.totalValue)}</strong><span>Total shown across live sample inventory</span></div>
      <div class="kpi-card"><h3>Orders</h3><strong>${data.orders.length}</strong><span>${ordersToday} created today in demo mode</span></div>
      <div class="kpi-card"><h3>Revenue Signal</h3><strong>${currency(data.payments.reduce((sum, p) => sum + Number(p.amount), 0))}</strong><span>Captured demo payments already flowing through the app</span></div>
    </div>
  `;
}

function renderProductCard(item) {
  const inWishlist = data.wishlist.includes(item.id);
  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" />
      </div>
      <div class="product-body">
        <div class="badge-row">
          <span class="badge">${escapeHtml(item.category)}</span>
          ${item.isNew ? `<span class="badge gold">New arrival</span>` : ""}
          ${item.allowOffer ? `<span class="badge dark">Make offer</span>` : ""}
          ${Number(item.qty) <= 0 ? `<span class="badge danger">Sold out</span>` : ""}
        </div>
        <div>
          <h3 class="product-title">${escapeHtml(item.name)}</h3>
          <p class="product-desc">${escapeHtml(item.description)}</p>
        </div>
        <div class="meta-row">
          <span class="small-chip">${escapeHtml(item.condition)}</span>
          <span class="small-chip">${escapeHtml(item.fulfillment)}</span>
          <span class="small-chip">Qty ${item.qty}</span>
        </div>
        <div class="price-row">
          <div>
            <div class="price">${currency(item.price)}</div>
            <div class="price-note">One-of-a-kind resale item</div>
          </div>
        </div>
        <div class="product-actions">
          <button class="btn btn-outline btn-sm" data-action="view-product" data-id="${item.id}">Details</button>
          <button class="btn btn-secondary btn-sm" data-action="toggle-wishlist" data-id="${item.id}">${inWishlist ? "Saved" : "Save"}</button>
          ${item.allowOffer ? `<button class="btn btn-outline btn-sm" data-action="open-offer" data-id="${item.id}">Offer</button>` : ""}
          <button class="btn btn-primary btn-sm" ${Number(item.qty) <= 0 ? "disabled" : ""} data-action="add-to-cart" data-id="${item.id}">${Number(item.qty) <= 0 ? "Sold" : "Buy Now"}</button>
        </div>
      </div>
    </article>
  `;
}

function renderCustomerHome() {
  const featured = getFeaturedInventory();
  const arrivals = getNewArrivals();
  const savedItems = data.wishlist.map((id) => getInventoryById(id)).filter(Boolean).slice(0, 3);
  return `
    <div class="home-grid">
      <section class="feature-panel panel feature-panel-photo">
        <div class="feature-bg"></div>
        <div class="feature-content">
          <div>
            <p class="eyebrow" style="color: rgba(255,255,255,.86)">Fresh finds added all the time</p>
            <h2>See what is in the store before you make the drive.</h2>
            <p>Browse one-of-a-kind resale pieces, save your favorites, send an offer on select items, and check out for pickup or shipping before the good stuff disappears.</p>
          </div>
          <div class="hero-actions">
            <button class="btn btn-primary" data-action="set-customer-view" data-view="shop">Shop all items</button>
            <button class="btn btn-outline" data-action="set-shop-category" data-category="Fresh Finds">View new arrivals</button>
          </div>
        </div>
      </section>
      <section class="card live-card">
        <div class="section-head">
          <div>
            <p class="eyebrow">Why shoppers will use this</p>
            <h2>Easy to browse. Easy to buy.</h2>
          </div>
        </div>
        <div class="live-metric-grid">
          <div class="live-metric"><strong>${featured.length}</strong><span>featured finds live now</span></div>
          <div class="live-metric"><strong>${arrivals.length}</strong><span>recently added items</span></div>
          <div class="live-metric"><strong>Pickup</strong><span>available on store-floor items</span></div>
          <div class="live-metric"><strong>Offers</strong><span>enabled on select listings</span></div>
        </div>
        <div class="detail-list" style="margin-top:16px;">
          <div class="detail-item"><div><div class="detail-label">Save favorites</div><strong>Keep track of the items you want before they are gone</strong></div><span class="badge dark">Quick</span></div>
          <div class="detail-item"><div><div class="detail-label">Checkout your way</div><strong>Buy online for pickup or shipping without waiting on back-and-forth messages</strong></div><span class="badge gold">Convenient</span></div>
        </div>
      </section>
    </div>

    <section class="card" style="margin-top:20px;">
      <div class="section-head">
        <div>
          <p class="eyebrow">Start here</p>
          <h2>Fresh finds shoppers would click first</h2>
        </div>
        <button class="btn btn-outline btn-sm" data-action="set-customer-view" data-view="shop">Shop all inventory</button>
      </div>
      <div class="product-grid product-grid-strong">
        ${featured.map(renderProductCard).join("")}
      </div>
    </section>

    <section class="card" style="margin-top:20px;">
      <div class="section-head">
        <div>
          <p class="eyebrow">How it works</p>
          <h2>Simple shopping flow for real customers</h2>
        </div>
      </div>
      <div class="detail-grid how-grid">
        <div class="small-panel"><strong>1. Browse what is here now</strong><span>Search categories, open details, and save favorites without guessing what made it to the floor.</span></div>
        <div class="small-panel"><strong>2. Buy now or send an offer</strong><span>Perfect for one-of-a-kind thrift inventory where timing matters and some prices have room to move.</span></div>
        <div class="small-panel"><strong>3. Pick up or ship</strong><span>Fast checkout makes it easy to lock in the item and choose the easiest way to get it.</span></div>
      </div>
    </section>

    <section class="card" style="margin-top:20px;">
      <div class="section-head">
        <div>
          <p class="eyebrow">Shop by category</p>
          <h2>Mixed thrift, organized in a way that makes sense</h2>
        </div>
      </div>
      <div class="category-grid">
        ${[
          ["Furniture", "Large pieces and pickup-friendly finds", "assets/images/placeholder-furniture.jpg"],
          ["Home Decor", "Quirky, giftable, fun to browse", "assets/images/placeholder-decor.jpg"],
          ["Collectibles", "Pop culture, sports, and one-off pieces", "assets/images/display-case.jpg"],
          ["Housewares", "Kitchen, glassware, and practical finds", "assets/images/placeholder-housewares.jpg"]
        ]
          .map(
            ([name, copy, image]) => `
              <button class="category-card" data-action="set-shop-category" data-category="${name}">
                <img src="${image}" alt="${name}" />
                <div class="category-content">
                  <h3>${name}</h3>
                  <p>${copy}</p>
                </div>
              </button>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="card" style="margin-top:20px;">
      <div class="section-head">
        <div>
          <p class="eyebrow">Saved for later</p>
          <h2>Your favorites</h2>
        </div>
        <button class="btn btn-outline btn-sm" data-action="set-customer-view" data-view="account">Open account</button>
      </div>
      ${savedItems.length ? `<div class="product-grid product-grid-strong">${savedItems.map(renderProductCard).join("")}</div>` : `<div class="empty-state">Save a few items and they will show up here for quick return visits.</div>`}
    </section>

    <section class="card" style="margin-top:20px;">
      <div class="section-head">
        <div>
          <p class="eyebrow">Just added</p>
          <h2>Recently added inventory</h2>
        </div>
      </div>
      <div class="product-grid product-grid-strong">
        ${arrivals.map(renderProductCard).join("")}
      </div>
    </section>
  `;
}

function renderCustomerShop() {
  const items = getFilteredInventory();
  return `
    <section class="card">
      <div class="section-head">
        <div>
          <p class="eyebrow">Browse inventory</p>
          <h2>Shop what is currently available.</h2>
          <p class="supporting">One-of-a-kind pieces move fast. Use search and categories to narrow in on what you want, then save it, send an offer, or check out before it is gone.</p>
        </div>
        <div class="filter-row">
          <div class="search-wrap"><input id="shop-search" type="search" placeholder="Search inventory" value="${escapeHtml(ui.shopSearch)}" /></div>
        </div>
      </div>
      <div class="filter-row" style="margin-bottom:18px;">
        ${categories
          .map(
            (category) => `
              <button class="small-chip ${ui.shopCategory === category ? "active" : ""}" data-action="set-shop-category" data-category="${category}">${category}</button>
            `
          )
          .join("")}
      </div>
      ${items.length ? `<div class="product-grid">${items.map(renderProductCard).join("")}</div>` : `<div class="empty-state">No items match that search right now. Try another category or clear the search.</div>`}
    </section>
  `;
}

function renderOrderCard(order) {
  const items = order.itemIds.map((id) => getInventoryById(id)?.name || "Inventory item").join(", ");
  const reorderId = order.itemIds[0];
  return `
    <article class="order-card">
      <div class="row-between">
        <div>
          <h3>${escapeHtml(order.id)}</h3>
          <p>${escapeHtml(items)}</p>
        </div>
        <span class="badge ${order.status.includes("Delivered") ? "success" : order.status.includes("Shipped") ? "dark" : "gold"}">${escapeHtml(order.status)}</span>
      </div>
      <div class="detail-list" style="margin-top:14px;">
        <div class="detail-item"><div class="detail-label">Total</div><strong>${currency(order.total)}</strong></div>
        <div class="detail-item"><div class="detail-label">Fulfillment</div><strong>${escapeHtml(order.fulfillment)}</strong></div>
        <div class="detail-item"><div class="detail-label">Placed</div><strong>${escapeHtml(order.date)}</strong></div>
      </div>
      <div class="product-actions" style="margin-top:16px;">
        <button class="btn btn-outline btn-sm" data-action="reorder-item" data-id="${reorderId}">Reorder similar</button>
        <a class="btn btn-secondary btn-sm" href="${MESSENGER_URL}" target="_blank" rel="noreferrer">Message Store</a>
      </div>
    </article>
  `;
}

function renderCustomerOrders() {
  return `
    <section class="card">
      <div class="section-head">
        <div>
          <p class="eyebrow">Order history</p>
          <h2>Everything in one place.</h2>
        </div>
      </div>
      <div class="order-grid">
        ${data.orders.map(renderOrderCard).join("")}
      </div>
    </section>
  `;
}

function renderCustomerMessages() {
  const messages = data.messages.filter((entry) => entry.audience === "customer");
  return `
    <section class="card">
      <div class="section-head">
        <div>
          <p class="eyebrow">Message center</p>
          <h2>Offers, updates, and store communication.</h2>
        </div>
        <a class="btn btn-secondary btn-sm" href="${MESSENGER_URL}" target="_blank" rel="noreferrer">Open Facebook Messenger</a>
      </div>
      <div class="message-list">
        ${messages
          .map(
            (message) => `
              <article class="message-card">
                <div class="message-item">
                  <div class="avatar">${escapeHtml(message.from.slice(0, 1))}</div>
                  <div>
                    <h3>${escapeHtml(message.subject)}</h3>
                    <p><strong>${escapeHtml(message.from)}</strong> • ${escapeHtml(message.time)}</p>
                    <p style="margin-top:8px;">${escapeHtml(message.body)}</p>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderCustomerAccount() {
  const profile = data.customerProfile;
  const savedItems = data.wishlist.map((id) => getInventoryById(id)).filter(Boolean);
  return `
    <div class="customer-grid">
      <section class="card">
        <div class="section-head">
          <div>
            <p class="eyebrow">Profile</p>
            <h2>${escapeHtml(profile.name)}</h2>
          </div>
          <span class="badge success">Member since ${escapeHtml(profile.memberSince)}</span>
        </div>
        <div class="detail-list">
          <div class="detail-item"><div class="detail-label">Email</div><strong>${escapeHtml(profile.email)}</strong></div>
          <div class="detail-item"><div class="detail-label">Phone</div><strong>${escapeHtml(profile.phone)}</strong></div>
          <div class="detail-item"><div class="detail-label">Saved payment methods</div><strong>${escapeHtml(profile.savedPayments.join(", "))}</strong></div>
          <div class="detail-item"><div class="detail-label">Address book</div><strong>${escapeHtml(profile.addresses.join(" • "))}</strong></div>
        </div>
      </section>
      <section class="card">
        <div class="section-head">
          <div>
            <p class="eyebrow">Saved items</p>
            <h2>Wishlist</h2>
          </div>
        </div>
        ${savedItems.length ? `<div class="product-grid" style="grid-template-columns:1fr;">${savedItems.map(renderProductCard).join("")}</div>` : `<div class="empty-state">No saved items yet.</div>`}
      </section>
    </div>
  `;
}

function renderCustomerPortal() {
  const content = {
    home: renderCustomerHome(),
    shop: renderCustomerShop(),
    orders: renderCustomerOrders(),
    messages: renderCustomerMessages(),
    account: renderCustomerAccount(),
    checkout: renderCheckoutScreen()
  }[ui.customerView];
  return `
    <div class="portal-shell screen">
      ${renderPortalHeader()}
      ${renderCustomerNav()}
      ${content}
    </div>
  `;
}

function renderAdminDashboard() {
  const stats = inventoryStats();
  const today = todaySnapshot();
  const recentActivity = buildRecentActivity();
  return `
    ${renderKpis()}
    <div class="live-dashboard" style="margin-top:20px;">
      <section class="card live-dashboard-hero">
        <div class="section-head">
          <div>
            <p class="eyebrow">Live today dashboard</p>
            <h2>This is the screen that should make Seth say, “yeah, I could actually use this.”</h2>
          </div>
          <span class="badge gold">Owner view</span>
        </div>
        <div class="live-dashboard-grid">
          <div class="live-big-stat"><span>Gross today</span><strong>${currency(today.grossToday)}</strong><small>Captured payments flowing through the demo today</small></div>
          <div class="live-big-stat"><span>Orders today</span><strong>${today.ordersToday.length}</strong><small>New orders that did not die in a message thread</small></div>
          <div class="live-big-stat"><span>Offers waiting</span><strong>${today.offerThreads}</strong><small>High-intent shoppers already showing interest</small></div>
          <div class="live-big-stat"><span>Pickup due</span><strong>${today.pickupReady}</strong><small>Orders needing pickup coordination</small></div>
        </div>
        <div class="detail-grid today-actions-grid" style="margin-top:20px;">
          <div class="small-panel"><strong>Add new floor items fast</strong><span>As soon as something interesting comes in, Seth can list it, feature it, and start collecting demand online.</span></div>
          <div class="small-panel"><strong>Close after-hours sales</strong><span>The app keeps working when the shop is closed, which means more chances to capture the easy yes.</span></div>
          <div class="small-panel"><strong>Keep the chaos organized</strong><span>Orders, payments, questions, offers, and inventory status stop living in random posts and DMs.</span></div>
        </div>
      </section>

      <div class="analytics-grid" style="margin-top:20px;">
        <section class="card">
          <div class="section-head">
            <div>
              <p class="eyebrow">Recent activity</p>
              <h2>What is moving right now.</h2>
            </div>
          </div>
          <div class="activity-list">
            ${recentActivity.map((entry) => `
              <div class="activity-item">
                <div>
                  <div class="detail-label">${escapeHtml(entry.type)}</div>
                  <strong>${escapeHtml(entry.title)}</strong>
                  <p>${escapeHtml(entry.meta)}</p>
                </div>
                <span class="badge">Live</span>
              </div>
            `).join("")}
          </div>
        </section>

        <section class="card">
          <div class="section-head">
            <div>
              <p class="eyebrow">Hot inventory</p>
              <h2>Listings drawing attention.</h2>
            </div>
          </div>
          <div class="hot-list">
            ${today.hotItems.map((item) => `
              <article class="hot-item">
                <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" />
                <div>
                  <strong>${escapeHtml(item.name)}</strong>
                  <p>${escapeHtml(item.category)} • ${currency(item.price)}</p>
                  <div class="badge-row">
                    ${item.isNew ? '<span class="badge gold">New</span>' : ''}
                    ${item.featured ? '<span class="badge dark">Featured</span>' : ''}
                    ${item.allowOffer ? '<span class="badge">Offers on</span>' : '<span class="badge success">Fixed price</span>'}
                  </div>
                </div>
              </article>
            `).join("")}
          </div>
        </section>
      </div>

      <div class="analytics-grid" style="margin-top:20px;">
        <section class="card">
          <div class="section-head">
            <div>
              <p class="eyebrow">Today at a glance</p>
              <h2>What Seth would care about first.</h2>
            </div>
          </div>
          <div class="detail-list">
            <div class="detail-item"><div><div class="detail-label">Orders in system</div><strong>${data.orders.length} total orders</strong></div><span class="badge gold">${today.openOrders} open</span></div>
            <div class="detail-item"><div><div class="detail-label">Payments captured</div><strong>${currency(data.payments.reduce((sum, p) => sum + Number(p.amount), 0))}</strong></div><span class="badge success">Online ready</span></div>
            <div class="detail-item"><div><div class="detail-label">Inventory listed</div><strong>${stats.activeCount} active items</strong></div><span class="badge dark">One-of-kind flow</span></div>
            <div class="detail-item"><div><div class="detail-label">New items ready to push</div><strong>${today.recentListings} fresh listings</strong></div><span class="badge">Fresh floor</span></div>
          </div>
        </section>
        <section class="card">
          <div class="section-head">
            <div>
              <p class="eyebrow">Admin focus</p>
              <h2>Why this app is valuable.</h2>
            </div>
          </div>
          <div class="detail-list">
            <div class="detail-item"><div><div class="detail-label">Fast inventory input</div><strong>Add and list a new item in minutes</strong></div></div>
            <div class="detail-item"><div><div class="detail-label">Cleaner selling flow</div><strong>Browse, offer, pay, pickup or ship without chaos</strong></div></div>
            <div class="detail-item"><div><div class="detail-label">Operational visibility</div><strong>Orders, customers, and money in one place</strong></div></div>
            <div class="detail-item"><div><div class="detail-label">Revenue upside</div><strong>Turn after-hours browsing into real online orders</strong></div></div>
          </div>
        </section>
      </div>

      <div class="analytics-grid" style="margin-top:20px;">
        <section class="card">
          <div class="section-head">
            <div>
              <p class="eyebrow">Category mix</p>
              <h2>Where the demo inventory is sitting.</h2>
            </div>
          </div>
          <div class="metric-bar-wrap">
            ${stats.byCategory
              .map(
                (entry) => `
                  <div class="metric-row">
                    <div class="metric-top"><strong>${escapeHtml(entry.name)}</strong><span>${entry.count} listings</span></div>
                    <div class="metric-bar"><div class="metric-fill" style="width:${Math.max(8, Math.min(100, entry.count * 18))}%"></div></div>
                  </div>
                `
              )
              .join("")}
          </div>
        </section>
        <section class="card">
          <div class="section-head">
            <div>
              <p class="eyebrow">Payments and demand</p>
              <h2>Money in + shopper signal.</h2>
            </div>
          </div>
          <div class="detail-list">
            ${data.payments.slice(0, 4).map((payment) => `<div class="detail-item"><div><div class="detail-label">${escapeHtml(payment.orderId)}</div><strong>${currency(payment.amount)}</strong></div><span class="badge success">${escapeHtml(payment.method)}</span></div>`).join("")}
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderInventoryTableRows() {
  const search = ui.inventorySearch.trim().toLowerCase();
  const filter = ui.inventoryFilter;
  const rows = data.inventory.filter((item) => {
    const matchesSearch = !search ? true : [item.name, item.category, item.status].join(" ").toLowerCase().includes(search);
    const matchesFilter = filter === "all" ? true : item.status.toLowerCase() === filter;
    return matchesSearch && matchesFilter;
  });
  if (!rows.length) {
    return `<tr><td colspan="8"><div class="empty-state">No inventory items match that filter.</div></td></tr>`;
  }
  return rows
    .map(
      (item) => `
        <tr>
          <td><strong>${escapeHtml(item.name)}</strong></td>
          <td>${escapeHtml(item.category)}</td>
          <td>${currency(item.price)}</td>
          <td>${item.qty}</td>
          <td><span class="badge ${item.status === "Sold" ? "danger" : item.status === "Draft" ? "gold" : "success"}">${escapeHtml(item.status)}</span></td>
          <td>${item.featured ? "Featured" : "Standard"}</td>
          <td>${item.allowOffer ? "Offers on" : "Fixed"}</td>
          <td>
            <div class="filter-row">
              <button class="btn btn-outline btn-sm" data-action="edit-item" data-id="${item.id}">Edit</button>
              <button class="btn btn-secondary btn-sm" data-action="duplicate-item" data-id="${item.id}">Duplicate</button>
              <button class="btn btn-outline btn-sm" data-action="toggle-item-status" data-id="${item.id}">${item.status === "Active" ? "Mark Sold" : "Mark Active"}</button>
            </div>
          </td>
        </tr>
      `
    )
    .join("");
}

function renderInventoryForm() {
  const form = ui.inventoryForm;
  return `
    <section class="inventory-form panel">
      <div class="section-head">
        <div>
          <p class="eyebrow">${ui.editingItemId ? "Edit listing" : "Add inventory"}</p>
          <h3>${ui.editingItemId ? "Update existing item" : "Create a new demo listing"}</h3>
        </div>
        ${ui.editingItemId ? `<button class="btn btn-outline btn-sm" data-action="clear-inventory-form">Clear</button>` : ""}
      </div>
      <div class="form-grid" style="margin-top:18px;">
        <label class="full"><input class="input" data-field="name" value="${escapeHtml(form.name)}" placeholder="Item name" /></label>
        <label><select class="input" data-field="category">${categories.filter((c) => c !== "Fresh Finds").map((category) => `<option value="${category}" ${form.category === category ? "selected" : ""}>${category}</option>`).join("")}</select></label>
        <label><input class="input" data-field="price" type="number" min="0" step="0.01" value="${escapeHtml(form.price)}" placeholder="Price" /></label>
        <label><select class="input" data-field="condition">${conditionOptions.map((option) => `<option value="${option}" ${form.condition === option ? "selected" : ""}>${option}</option>`).join("")}</select></label>
        <label><input class="input" data-field="qty" type="number" min="0" step="1" value="${escapeHtml(form.qty)}" placeholder="Quantity" /></label>
        <label><select class="input" data-field="fulfillment">${fulfillmentOptions.map((option) => `<option value="${option}" ${form.fulfillment === option ? "selected" : ""}>${option}</option>`).join("")}</select></label>
        <label><select class="input" data-field="status">
          ${["Active", "Draft", "Sold"].map((option) => `<option value="${option}" ${form.status === option ? "selected" : ""}>${option}</option>`).join("")}
        </select></label>
        <label class="full"><input class="input" data-field="image" value="${escapeHtml(form.image)}" placeholder="Image path or URL" /></label>
        <label class="full"><textarea class="textarea" data-field="description" placeholder="Description">${escapeHtml(form.description)}</textarea></label>
      </div>
      <div class="checkbox-grid" style="margin-top:16px;">
        <label class="toggle"><input type="checkbox" data-field="allowOffer" ${form.allowOffer ? "checked" : ""} /> Allow offers</label>
        <label class="toggle"><input type="checkbox" data-field="featured" ${form.featured ? "checked" : ""} /> Featured on home</label>
        <label class="toggle"><input type="checkbox" data-field="isNew" ${form.isNew ? "checked" : ""} /> Mark as new arrival</label>
      </div>
      <div class="product-actions" style="margin-top:18px;">
        <button class="btn btn-primary" data-action="save-inventory-item">${ui.editingItemId ? "Update item" : "Add item"}</button>
        <button class="btn btn-outline" data-action="clear-inventory-form">Clear form</button>
      </div>
      <p class="form-help" style="margin-top:14px;">This is front-end demo data with local browser persistence. Great for showing the workflow without needing the real inventory list yet.</p>
    </section>
  `;
}

function renderAdminInventory() {
  return `
    <div class="inventory-layout">
      <section class="card">
        <div class="inventory-toolbar">
          <div>
            <p class="eyebrow">Inventory manager</p>
            <h2 style="margin:8px 0 0;">Current sample listings</h2>
          </div>
          <div class="filter-row">
            <div class="search-wrap"><input id="inventory-search" type="search" placeholder="Search inventory" value="${escapeHtml(ui.inventorySearch)}" /></div>
            <select id="inventory-filter" class="input" style="min-width:170px;">
              <option value="all" ${ui.inventoryFilter === "all" ? "selected" : ""}>All statuses</option>
              <option value="active" ${ui.inventoryFilter === "active" ? "selected" : ""}>Active</option>
              <option value="draft" ${ui.inventoryFilter === "draft" ? "selected" : ""}>Draft</option>
              <option value="sold" ${ui.inventoryFilter === "sold" ? "selected" : ""}>Sold</option>
            </select>
          </div>
        </div>
        <div class="table-wrap" style="margin-top:18px;">
          <table class="table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Category</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Status</th>
                <th>Placement</th>
                <th>Sales mode</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${renderInventoryTableRows()}
            </tbody>
          </table>
        </div>
      </section>
      ${renderInventoryForm()}
    </div>
  `;
}

function renderAdminOrders() {
  return `
    <section class="card">
      <div class="section-head">
        <div>
          <p class="eyebrow">Order manager</p>
          <h2>Track fulfillment and customer follow-up.</h2>
        </div>
      </div>
      <div class="order-grid">
        ${data.orders
          .map(
            (order) => `
              <article class="order-card">
                <div class="row-between">
                  <div>
                    <h3>${escapeHtml(order.id)}</h3>
                    <p>${escapeHtml(order.customerName)} • ${escapeHtml(order.email)}</p>
                  </div>
                  <span class="badge ${order.status.includes("Delivered") ? "success" : order.status.includes("Shipped") ? "dark" : "gold"}">${escapeHtml(order.status)}</span>
                </div>
                <div class="detail-list" style="margin-top:14px;">
                  <div class="detail-item"><div class="detail-label">Total</div><strong>${currency(order.total)}</strong></div>
                  <div class="detail-item"><div class="detail-label">Fulfillment</div><strong>${escapeHtml(order.fulfillment)}</strong></div>
                  <div class="detail-item"><div class="detail-label">Note</div><strong>${escapeHtml(order.note)}</strong></div>
                </div>
                <div class="product-actions" style="margin-top:16px;">
                  <button class="btn btn-outline btn-sm" data-action="set-order-status" data-id="${order.id}" data-status="Ready for pickup">Ready</button>
                  <button class="btn btn-outline btn-sm" data-action="set-order-status" data-id="${order.id}" data-status="Shipped">Ship</button>
                  <button class="btn btn-secondary btn-sm" data-action="set-order-status" data-id="${order.id}" data-status="Delivered">Delivered</button>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderAdminCustomers() {
  return `
    <section class="card">
      <div class="section-head">
        <div>
          <p class="eyebrow">Customer records</p>
          <h2>Who is buying and what they like.</h2>
        </div>
      </div>
      <div class="customer-grid">
        ${data.customers
          .map(
            (customer) => `
              <article class="customer-card">
                <div class="row-between">
                  <div>
                    <h3>${escapeHtml(customer.name)}</h3>
                    <p>${escapeHtml(customer.email)}</p>
                  </div>
                  <span class="badge success">${escapeHtml(customer.tier)}</span>
                </div>
                <div class="detail-list" style="margin-top:14px;">
                  <div class="detail-item"><div class="detail-label">Orders</div><strong>${customer.orders}</strong></div>
                  <div class="detail-item"><div class="detail-label">Lifetime value</div><strong>${currency(customer.lifetimeValue)}</strong></div>
                  <div class="detail-item"><div class="detail-label">Favorite category</div><strong>${escapeHtml(customer.favoriteCategory)}</strong></div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderAdminPayments() {
  const totalCaptured = data.payments.reduce((sum, payment) => sum + Number(payment.amount), 0);
  return `
    <section class="card">
      <div class="section-head">
        <div>
          <p class="eyebrow">Payments</p>
          <h2>Demo payment activity</h2>
        </div>
        <span class="badge success">${currency(totalCaptured)} captured</span>
      </div>
      <div class="payment-grid">
        ${data.payments
          .map(
            (payment) => `
              <article class="payment-card">
                <div class="row-between">
                  <div>
                    <h3>${escapeHtml(payment.orderId)}</h3>
                    <p>${escapeHtml(payment.method)} • ${escapeHtml(payment.date)}</p>
                  </div>
                  <span class="badge success">${escapeHtml(payment.status)}</span>
                </div>
                <div class="detail-list" style="margin-top:14px;">
                  <div class="detail-item"><div class="detail-label">Amount</div><strong>${currency(payment.amount)}</strong></div>
                  <div class="detail-item"><div class="detail-label">Payment ID</div><strong>${escapeHtml(payment.id)}</strong></div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderAdminAnalytics() {
  const stats = inventoryStats();
  const openOrders = data.orders.filter((order) => !order.status.includes("Delivered")).length;
  return `
    <div class="analytics-grid">
      <section class="analytics-card">
        <div class="section-head">
          <div>
            <p class="eyebrow">Sell-through potential</p>
            <h2>Inventory concentration</h2>
          </div>
        </div>
        <div class="metric-bar-wrap">
          ${stats.byCategory
            .map((entry) => `<div class="metric-row"><div class="metric-top"><strong>${escapeHtml(entry.name)}</strong><span>${entry.count}</span></div><div class="metric-bar"><div class="metric-fill" style="width:${Math.max(10, entry.count * 18)}%"></div></div></div>`)
            .join("")}
        </div>
      </section>
      <section class="analytics-card">
        <div class="section-head"><div><p class="eyebrow">Operational pulse</p><h2>Store health snapshot</h2></div></div>
        <div class="detail-list">
          <div class="detail-item"><div class="detail-label">Open orders</div><strong>${openOrders}</strong></div>
          <div class="detail-item"><div class="detail-label">Featured items</div><strong>${getFeaturedInventory().length}</strong></div>
          <div class="detail-item"><div class="detail-label">Offers enabled</div><strong>${data.inventory.filter((item) => item.allowOffer).length}</strong></div>
          <div class="detail-item"><div class="detail-label">Customers tracked</div><strong>${data.customers.length}</strong></div>
        </div>
      </section>
      <section class="analytics-card">
        <div class="section-head"><div><p class="eyebrow">Revenue preview</p><h2>Captured demo payments</h2></div></div>
        <div class="metric-bar-wrap">
          ${data.payments
            .slice(0, 5)
            .map((payment) => `<div class="metric-row"><div class="metric-top"><strong>${escapeHtml(payment.orderId)}</strong><span>${currency(payment.amount)}</span></div><div class="metric-bar"><div class="metric-fill" style="width:${Math.min(100, Number(payment.amount))}%"></div></div></div>`)
            .join("")}
        </div>
      </section>
      <section class="analytics-card">
        <div class="section-head"><div><p class="eyebrow">What to tell Seth</p><h2>Strong pitch angles</h2></div></div>
        <div class="detail-list">
          <div class="detail-item"><div class="detail-label">Speed</div><strong>List fresh inventory without waiting on Facebook posts</strong></div>
          <div class="detail-item"><div class="detail-label">Conversion</div><strong>Let customers check out immediately when they see something</strong></div>
          <div class="detail-item"><div class="detail-label">Control</div><strong>Track inventory, offers, payments, and customer demand in one app</strong></div>
        </div>
      </section>
    </div>
  `;
}

function renderAdminOpportunity() {
  const avgOrder = data.orders.length ? data.orders.reduce((sum, order) => sum + Number(order.total || 0), 0) / data.orders.length : 0;
  const demoLift = avgOrder * 8;
  const annualLift = demoLift * 12;
  const strongerLift = avgOrder * 15;
  return `
    <div class="analytics-grid opportunity-grid">
      <section class="analytics-card opportunity-hero">
        <div class="section-head"><div><p class="eyebrow">Why this matters</p><h2>This is the money view.</h2></div><span class="badge gold">Sales tool</span></div>
        <p class="supporting">This screen exists to help Seth connect the dots fast: the app is not just about looking modern. It gives customers a cleaner way to buy, gives the store a better way to manage one-of-a-kind inventory, and gives the business a shot at capturing sales that normally die in messages or after-hours browsing.</p>
        <div class="quick-grid opportunity-mini-grid" style="margin-top:18px;">
          <div class="small-panel"><strong>24/7 browsing</strong><span>Customers can shop after the store is closed and still complete a checkout.</span></div>
          <div class="small-panel"><strong>Less manual back-and-forth</strong><span>Inventory, offers, and order updates stop living in random message threads.</span></div>
          <div class="small-panel"><strong>Better conversion</strong><span>When someone wants the item, they can buy it before another shopper beats them to it.</span></div>
        </div>
      </section>

      <section class="analytics-card">
        <div class="section-head"><div><p class="eyebrow">Demo assumptions</p><h2>Simple revenue story</h2></div><span class="badge success">Illustrative</span></div>
        <div class="detail-list">
          <div class="detail-item"><div><div class="detail-label">Average order in this demo</div><strong>${currency(avgOrder)}</strong></div><span class="badge dark">Based on sample orders</span></div>
          <div class="detail-item"><div><div class="detail-label">If the app captures 8 extra orders / month</div><strong>${currency(demoLift)} / month</strong></div><span class="badge gold">Small win</span></div>
          <div class="detail-item"><div><div class="detail-label">If Seth turns this into 15 extra orders / month</div><strong>${currency(strongerLift)} / month</strong></div><span class="badge success">More realistic upside</span></div>
          <div class="detail-item"><div><div class="detail-label">That same 8-order pace across a year</div><strong>${currency(annualLift)} / year</strong></div><span class="badge success">Adds up</span></div>
        </div>
      </section>

      <section class="analytics-card">
        <div class="section-head"><div><p class="eyebrow">What the app fixes</p><h2>Without this system</h2></div></div>
        <div class="detail-list">
          <div class="detail-item"><div class="detail-label">Inventory visibility</div><strong>People miss items because they never see the post in time</strong></div>
          <div class="detail-item"><div class="detail-label">Sales friction</div><strong>Interested buyers wait on replies instead of checking out immediately</strong></div>
          <div class="detail-item"><div class="detail-label">Operational drag</div><strong>Orders, offers, questions, and payments are scattered across tools</strong></div>
          <div class="detail-item"><div class="detail-label">No owned customer flow</div><strong>Harder to build repeat buyers and saved-item behavior</strong></div>
        </div>
      </section>

      <section class="analytics-card">
        <div class="section-head"><div><p class="eyebrow">What Seth gets</p><h2>Core owner benefits</h2></div></div>
        <div class="detail-list">
          <div class="detail-item"><div class="detail-label">Inventory control</div><strong>List, edit, feature, or mark sold from one admin dashboard</strong></div>
          <div class="detail-item"><div class="detail-label">Sales control</div><strong>Buy now, make offer, pickup or ship — all in one flow</strong></div>
          <div class="detail-item"><div class="detail-label">Customer visibility</div><strong>See who is buying, what they like, and what they are asking about</strong></div>
          <div class="detail-item"><div class="detail-label">Stronger first impression</div><strong>The business feels organized, current, and easy to buy from</strong></div>
        </div>
      </section>

      <section class="analytics-card" style="grid-column: 1 / -1;">
        <div class="section-head"><div><p class="eyebrow">Phased rollout</p><h2>How this could become real</h2></div></div>
        <div class="detail-grid opportunity-phase-grid">
          <div class="small-panel"><strong>Phase 1</strong><span>Customer storefront, inventory catalog, cart, checkout, pickup/shipping, and a clean admin dashboard.</span></div>
          <div class="small-panel"><strong>Phase 2</strong><span>Real payments, real product database, image uploads, inventory counts, and order management.</span></div>
          <div class="small-panel"><strong>Phase 3</strong><span>Customer accounts, saved items, notifications, offers, repeat-buyer flows, and better reporting.</span></div>
          <div class="small-panel"><strong>Phase 4</strong><span>Staff workflows, barcode/SKU support, deeper automation, and tighter social selling integration.</span></div>
        </div>
      </section>
    </div>
  `;
}

function renderAdminMessages() {
  const messages = data.messages.filter((entry) => entry.audience === "admin");
  return `
    <section class="card">
      <div class="section-head">
        <div>
          <p class="eyebrow">Message inbox</p>
          <h2>Customer questions and offer activity.</h2>
        </div>
      </div>
      <div class="message-list">
        ${messages
          .map(
            (message) => `
              <article class="message-card">
                <div class="message-item">
                  <div class="avatar">${escapeHtml(message.from.slice(0, 1))}</div>
                  <div>
                    <h3>${escapeHtml(message.subject)}</h3>
                    <p><strong>${escapeHtml(message.from)}</strong> • ${escapeHtml(message.time)}</p>
                    <p style="margin-top:8px;">${escapeHtml(message.body)}</p>
                    <div class="product-actions" style="margin-top:14px;">
                      <button class="btn btn-secondary btn-sm" data-action="quick-reply" data-id="${message.id}">Quick reply</button>
                    </div>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderAdminSettings() {
  return `
    <section class="card">
      <div class="section-head">
        <div>
          <p class="eyebrow">Store settings</p>
          <h2>Mock controls for the sales pitch.</h2>
        </div>
      </div>
      <div class="settings-grid">
        <article class="settings-card">
          <h3>Fulfillment options</h3>
          <p>Pickup and shipping can both be surfaced in checkout depending on the item.</p>
          <div class="checkbox-grid" style="margin-top:14px;">
            <label class="toggle"><input type="checkbox" checked disabled /> Pickup enabled</label>
            <label class="toggle"><input type="checkbox" checked disabled /> Shipping enabled</label>
          </div>
        </article>
        <article class="settings-card">
          <h3>Offer workflow</h3>
          <p>Items can allow fixed price only or fixed price plus make-offer. That matters in resale.</p>
          <div class="checkbox-grid" style="margin-top:14px;">
            <label class="toggle"><input type="checkbox" checked disabled /> Make offers enabled</label>
          </div>
        </article>
        <article class="settings-card">
          <h3>Customer communication</h3>
          <p>In-app messages plus Facebook Messenger fallback keep the experience local and familiar.</p>
          <div class="detail-list" style="margin-top:14px;">
            <div class="detail-item"><div class="detail-label">Primary contact</div><strong>Facebook Messenger</strong></div>
            <div class="detail-item"><div class="detail-label">Store address</div><strong>${STORE_ADDRESS}</strong></div>
          </div>
        </article>
        <article class="settings-card">
          <h3>Reality check</h3>
          <p>This demo is front-end only right now. A real build would connect inventory, auth, and payments to a backend.</p>
          <div class="notice" style="margin-top:14px;">That is exactly fine for this stage. The goal is for Seth to feel the system, not get buried in technical details.</div>
        </article>
      </div>
    </section>
  `;
}

function renderAdminPortal() {
  const content = {
    dashboard: renderAdminDashboard(),
    inventory: renderAdminInventory(),
    orders: renderAdminOrders(),
    customers: renderAdminCustomers(),
    payments: renderAdminPayments(),
    analytics: renderAdminAnalytics(),
    opportunity: renderAdminOpportunity(),
    messages: renderAdminMessages(),
    settings: renderAdminSettings()
  }[ui.adminView];
  return `
    <div class="portal-shell screen">
      ${renderPortalHeader()}
      ${renderAdminNav()}
      ${content}
    </div>
  `;
}

function renderCheckoutScreen() {
  const lines = cartLines();
  return `
    <div class="checkout-layout">
      <section class="checkout-card">
        <div class="checkout-head">
          <div>
            <p class="eyebrow">Checkout</p>
            <h3>Finish the order online.</h3>
          </div>
        </div>
        ${lines.length ? `
          <div class="form-grid" style="margin-top:18px;">
            <label class="full"><input class="input" data-checkout-field="name" value="${escapeHtml(ui.checkoutForm.name)}" placeholder="Full name" /></label>
            <label><input class="input" data-checkout-field="email" value="${escapeHtml(ui.checkoutForm.email)}" placeholder="Email" /></label>
            <label><input class="input" data-checkout-field="phone" value="${escapeHtml(ui.checkoutForm.phone)}" placeholder="Phone" /></label>
            <label>
              <select class="input" data-checkout-field="fulfillment">
                ${["Pickup", "Ship"].map((option) => `<option value="${option}" ${ui.checkoutForm.fulfillment === option ? "selected" : ""}>${option}</option>`).join("")}
              </select>
            </label>
            <label>
              <select class="input" data-checkout-field="paymentMethod">
                ${["Card", "Apple Pay", "Google Pay", "PayPal"].map((option) => `<option value="${option}" ${ui.checkoutForm.paymentMethod === option ? "selected" : ""}>${option}</option>`).join("")}
              </select>
            </label>
            <label class="full"><textarea class="textarea" data-checkout-field="notes" placeholder="Pickup notes or delivery notes">${escapeHtml(ui.checkoutForm.notes)}</textarea></label>
          </div>
        ` : `<div class="empty-state">Your cart is empty. Add a few items first so Seth can see the checkout flow.</div>`}
      </section>
      <section class="checkout-card">
        <div class="checkout-head">
          <div>
            <p class="eyebrow">Order summary</p>
            <h3>What the customer sees</h3>
          </div>
        </div>
        ${lines.length ? `
          <div class="checkout-summary-list" style="margin-top:18px;">
            ${lines.map((line) => `<div class="checkout-line"><span>${escapeHtml(line.item.name)}</span><strong>${currency(line.subtotal)}</strong></div>`).join("")}
          </div>
          <div class="divider"></div>
          <div class="checkout-line"><span>Subtotal</span><strong>${currency(cartTotal())}</strong></div>
          <div class="checkout-line"><span>Service fee</span><strong>${currency(0)}</strong></div>
          <div class="checkout-line" style="margin-top:8px;"><span>Total</span><strong style="font-size:1.3rem;">${currency(cartTotal())}</strong></div>
          <div class="product-actions" style="margin-top:20px;">
            <button class="btn btn-primary" data-action="place-order">Pay now</button>
            <button class="btn btn-outline" data-action="open-cart">Back to cart</button>
          </div>
          <p class="form-help" style="margin-top:12px;">Demo mode only. Payment is simulated, but the order, payment, and inventory will update inside the app.</p>
        ` : ""}
      </section>
    </div>
  `;
}

function renderModal() {
  if (!ui.modal) return "";
  if (ui.modal.type === "product") {
    const item = getInventoryById(ui.modal.itemId);
    if (!item) return "";
    return `
      <div class="modal-overlay" data-action="close-modal-overlay">
        <div class="modal" role="dialog" aria-modal="true" aria-label="Product details">
          <div class="modal-body">
            <div class="modal-head">
              <div>
                <p class="eyebrow">Product details</p>
                <h3>${escapeHtml(item.name)}</h3>
              </div>
              <button class="btn btn-outline btn-sm" data-action="close-modal">Close</button>
            </div>
            <div class="product-detail" style="margin-top:18px;">
              <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" />
              <div>
                <div class="detail-badges">
                  <span class="badge">${escapeHtml(item.category)}</span>
                  <span class="badge dark">${escapeHtml(item.condition)}</span>
                  ${item.allowOffer ? `<span class="badge gold">Make offer enabled</span>` : ""}
                </div>
                <div class="price" style="margin-top:16px;">${currency(item.price)}</div>
                <p class="product-desc" style="margin-top:12px;">${escapeHtml(item.description)}</p>
                <div class="detail-list" style="margin-top:16px;">
                  <div class="detail-item"><div class="detail-label">Fulfillment</div><strong>${escapeHtml(item.fulfillment)}</strong></div>
                  <div class="detail-item"><div class="detail-label">Inventory</div><strong>${item.qty > 0 ? `${item.qty} available` : "Sold out"}</strong></div>
                  <div class="detail-item"><div class="detail-label">Selling mode</div><strong>${item.allowOffer ? "Buy now + make offer" : "Fixed price"}</strong></div>
                </div>
                <div class="product-actions" style="margin-top:20px;">
                  <button class="btn btn-primary" ${Number(item.qty) <= 0 ? "disabled" : ""} data-action="add-to-cart" data-id="${item.id}">${Number(item.qty) <= 0 ? "Sold" : "Add to cart"}</button>
                  ${item.allowOffer ? `<button class="btn btn-outline" data-action="open-offer" data-id="${item.id}">Make offer</button>` : ""}
                  <button class="btn btn-secondary" data-action="toggle-wishlist" data-id="${item.id}">${data.wishlist.includes(item.id) ? "Saved" : "Save item"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  if (ui.modal.type === "offer") {
    const item = getInventoryById(ui.modal.itemId);
    if (!item) return "";
    return `
      <div class="modal-overlay" data-action="close-modal-overlay">
        <div class="modal" role="dialog" aria-modal="true" aria-label="Make an offer">
          <div class="modal-body">
            <div class="modal-head">
              <div>
                <p class="eyebrow">Make an offer</p>
                <h3>${escapeHtml(item.name)}</h3>
              </div>
              <button class="btn btn-outline btn-sm" data-action="close-modal">Close</button>
            </div>
            <div class="card" style="margin-top:18px; box-shadow:none; background:#fff;">
              <p class="supporting">Listed at <strong>${currency(item.price)}</strong>. In demo mode, offers at 80% or more are accepted automatically and added to the cart.</p>
              <div class="form-grid" style="margin-top:18px;">
                <label class="full"><input id="offer-amount" class="input" type="number" min="1" step="1" placeholder="Enter your offer amount" value="${Math.max(1, Math.floor(item.price * 0.85))}" /></label>
              </div>
              <div class="product-actions" style="margin-top:18px;">
                <button class="btn btn-primary" data-action="submit-offer" data-id="${item.id}">Send offer</button>
                <button class="btn btn-outline" data-action="close-modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  return "";
}

function renderDrawer() {
  if (!ui.cartOpen) return "";
  const lines = cartLines();
  return `
    <div class="drawer-overlay" data-action="close-drawer-overlay">
      <aside class="drawer" aria-label="Shopping cart">
        <div class="drawer-header">
          <div class="modal-head">
            <div>
              <p class="eyebrow">Customer cart</p>
              <h3>${lines.length ? `${cartCount()} item${cartCount() === 1 ? "" : "s"}` : "Your cart is empty"}</h3>
            </div>
            <button class="btn btn-outline btn-sm" data-action="close-cart">Close</button>
          </div>
        </div>
        <div class="drawer-body">
          ${lines.length ? lines.map((line) => `
            <div class="cart-item">
              <img src="${escapeHtml(line.item.image)}" alt="${escapeHtml(line.item.name)}" />
              <div>
                <h4>${escapeHtml(line.item.name)}</h4>
                <p class="meta">${escapeHtml(line.item.fulfillment)} • ${escapeHtml(line.item.condition)}</p>
                ${line.note ? `<p class="meta" style="margin-top:6px;">${escapeHtml(line.note)}</p>` : ""}
                <div class="row-between" style="margin-top:10px;">
                  <strong>${currency(line.price)}</strong>
                  <button class="btn btn-danger btn-sm" data-action="remove-cart-item" data-index="${line.index}">Remove</button>
                </div>
              </div>
            </div>
          `).join("") : `<div class="empty-state">Add a few inventory items so Seth can test the cart and checkout flow.</div>`}
        </div>
        <div class="drawer-footer">
          <div class="checkout-line"><span>Subtotal</span><strong>${currency(cartTotal())}</strong></div>
          <button class="btn btn-primary" ${lines.length ? "" : "disabled"} data-action="go-to-checkout">Go to checkout</button>
          <button class="btn btn-outline" data-action="set-customer-view" data-view="shop">Keep shopping</button>
        </div>
      </aside>
    </div>
  `;
}

function renderApp() {
  if (!ui.portal) return renderLogin();
  return ui.portal === "customer" ? renderCustomerPortal() : renderAdminPortal();
}

function render() {
  const app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = `
    <div class="app-shell">
      ${renderTopbar()}
      ${renderApp()}
      ${renderModal()}
      ${renderDrawer()}
    </div>
  `;
  bindDynamicInputs();
}

function bindDynamicInputs() {
  const shopSearch = document.getElementById("shop-search");
  if (shopSearch) {
    shopSearch.addEventListener("input", (event) => {
      ui.shopSearch = event.target.value;
      render();
    });
  }
  const inventorySearch = document.getElementById("inventory-search");
  if (inventorySearch) {
    inventorySearch.addEventListener("input", (event) => {
      ui.inventorySearch = event.target.value;
      render();
    });
  }
  const inventoryFilter = document.getElementById("inventory-filter");
  if (inventoryFilter) {
    inventoryFilter.addEventListener("change", (event) => {
      ui.inventoryFilter = event.target.value;
      render();
    });
  }
  document.querySelectorAll("[data-field]").forEach((element) => {
    element.addEventListener(element.type === "checkbox" ? "change" : "input", (event) => {
      const field = event.target.getAttribute("data-field");
      ui.inventoryForm[field] = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    });
  });
  document.querySelectorAll("[data-checkout-field]").forEach((element) => {
    element.addEventListener(element.tagName === "SELECT" ? "change" : "input", (event) => {
      const field = event.target.getAttribute("data-checkout-field");
      ui.checkoutForm[field] = event.target.value;
    });
  });
}

function handleClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.getAttribute("data-action");
  const id = target.getAttribute("data-id");
  if (action === "enter-portal" || action === "switch-portal") {
    ui.portal = target.getAttribute("data-portal");
    if (ui.portal === "customer") ui.customerView = "home";
    if (ui.portal === "admin") ui.adminView = "dashboard";
    updateHash();
    render();
    return;
  }
  if (action === "set-customer-view") {
    ui.portal = "customer";
    ui.customerView = target.getAttribute("data-view");
    updateHash();
    render();
    return;
  }
  if (action === "set-admin-view") {
    ui.portal = "admin";
    ui.adminView = target.getAttribute("data-view");
    updateHash();
    render();
    return;
  }
  if (action === "set-shop-category") {
    ui.shopCategory = target.getAttribute("data-category");
    ui.customerView = "shop";
    updateHash();
    render();
    return;
  }
  if (action === "open-cart") {
    ui.cartOpen = true;
    render();
    return;
  }
  if (action === "close-cart" || action === "close-drawer-overlay") {
    if (action === "close-drawer-overlay" && event.target !== target) return;
    ui.cartOpen = false;
    render();
    return;
  }
  if (action === "go-to-checkout") {
    ui.cartOpen = false;
    ui.customerView = "checkout";
    updateHash();
    render();
    return;
  }
  if (action === "view-product") {
    ui.modal = { type: "product", itemId: id };
    render();
    return;
  }
  if (action === "open-offer") {
    ui.modal = { type: "offer", itemId: id };
    render();
    return;
  }
  if (action === "close-modal" || action === "close-modal-overlay") {
    if (action === "close-modal-overlay" && event.target !== target) return;
    ui.modal = null;
    render();
    return;
  }
  if (action === "add-to-cart") {
    addToCart(id);
    return;
  }
  if (action === "remove-cart-item") {
    removeFromCart(Number(target.getAttribute("data-index")));
    return;
  }
  if (action === "toggle-wishlist") {
    toggleWishlist(id);
    return;
  }
  if (action === "place-order") {
    createOrderFromCart();
    return;
  }
  if (action === "submit-offer") {
    const input = document.getElementById("offer-amount");
    submitOffer(id, input ? input.value : 0);
    return;
  }
  if (action === "save-inventory-item") {
    saveInventoryItem();
    return;
  }
  if (action === "clear-inventory-form") {
    ui.inventoryForm = emptyInventoryForm();
    ui.editingItemId = null;
    render();
    return;
  }
  if (action === "edit-item") {
    populateInventoryForm(id);
    return;
  }
  if (action === "duplicate-item") {
    duplicateInventoryItem(id);
    return;
  }
  if (action === "toggle-item-status") {
    const item = getInventoryById(id);
    if (!item) return;
    item.status = item.status === "Active" ? "Sold" : "Active";
    if (item.status === "Sold") item.qty = 0;
    if (item.status === "Active" && item.qty === 0) item.qty = 1;
    persistData();
    toast("Item updated", `${item.name} is now ${item.status.toLowerCase()}.`);
    render();
    return;
  }
  if (action === "set-order-status") {
    setOrderStatus(id, target.getAttribute("data-status"));
    return;
  }
  if (action === "quick-reply") {
    quickReply(id);
    return;
  }
  if (action === "reorder-item") {
    addToCart(id);
    return;
  }
  if (action === "reset-demo") {
    resetDemo();
    return;
  }
}

document.addEventListener("click", handleClick);
window.addEventListener("hashchange", () => {
  applyRoute();
  render();
});

applyRoute();
render();
