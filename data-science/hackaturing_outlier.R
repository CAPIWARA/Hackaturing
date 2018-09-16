library(dplyr) 

# Import dataset
df <- read.csv("C:/Users/iago.modesto.brandao/Desktop/hackaturing.dsv",sep="|",header=TRUE,dec=".")
colnames(df) <- sapply(strsplit(colnames(df), split='.', fixed=TRUE), function(x) (x[2]))
df[["descricao_despesa"]] <- sapply(df[["descricao_despesa"]], tolower)

important <- c("id_beneficiario","senha","id_conta","data_item",
               "descricao_despesa","valor_cobrado","quantidade")

sb <- df[important]
sb <- sb[-grep("null",df$descricao_despesa),]
sb <- sb[rev(order((sb[["id_beneficiario"]]))),]

# Exploration
palavra = "dengue"
conta = sb[grep(palavra,sb[["descricao_despesa"]]),"id_conta"][2]
analise <- sb[grep(conta,sb[["id_conta"]]),]

# Exploration
palavra = "parto"
conta = sb[grep(palavra,sb[["descricao_despesa"]]),"id_conta"]

i = 1
for (item in conta){
  temp <- sb[grep(item,sb[["id_conta"]]),"descricao_despesa"]
  if ( i == 1 ){
    old <- sb[1,]
    old[1,] <- NULL
  } else {
    old <- rbind(old, now)
  }
  i = i + 1
}




# Results
colecao <- c("hemossedimentacao","hemograma","imunoglobulina","dengue")

beneficiarios <- sb[sb$descricao_despesa %in% colecao,"id_beneficiario"]

ndf <- (df[as.numeric(df$valor_cobrado) > 0,])







# 
# rm(conta)
# 
# for (item in colecao) {
#   tt[["PNOW"]] <- as.list(sb[sb$descricao_despesa == item,"id_beneficiario"])
#   if (i == 0){
#     tt[["P1"]] <- tt[["PNOW"]]
#   }else {
#     tt[["P1"]] <- intersect(tt[["PNOW"]],tt[["P1"]])
#   }
#   i = i + 1
# }
# 
